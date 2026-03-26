import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/register", async (req, res) => {
    const { fullName, email, phone, university, branchYear, reason } = req.body;

    if (!email || !fullName) {
      return res.status(400).json({ error: "Name and Email are required." });
    }

    try {
      let sheetStatus = "Skipped (Not Configured)";
      let emailStatus = "Skipped (Not Configured)";

      // 1. Store in Google Sheets
      if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
        try {
          const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
          });

          const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
          await doc.loadInfo();
          const sheet = doc.sheetsByIndex[0];

          // Ensure headers exist
          const expectedHeaders = ["Timestamp", "Full Name", "Email", "Phone", "University", "Branch & Year", "Reason", "Status"];
          try {
            await sheet.loadHeaderRow();
          } catch (e) {
            // If loadHeaderRow fails, the sheet is likely empty. Set headers.
            await sheet.setHeaderRow(expectedHeaders);
            await sheet.updateProperties({ 
              gridProperties: { 
                ...sheet.gridProperties,
                frozenRowCount: 1 
              } 
            });
          }
          
          // If loadHeaderRow succeeded but headers are still empty, set them
          if (sheet.headerValues.length === 0) {
            await sheet.setHeaderRow(expectedHeaders);
          }

          await sheet.addRow({
            "Timestamp": new Date().toISOString(),
            "Full Name": fullName,
            "Email": email,
            "Phone": phone,
            "University": university,
            "Branch & Year": branchYear,
            "Reason": reason,
            "Status": "Pending Verification"
          });
          sheetStatus = "Success";
        } catch (sheetError: any) {
          console.error("Google Sheets Error:", sheetError);
          throw new Error(`Google Sheets Integration Failed: ${sheetError.message}`);
        }
      }

      // 2. Send Email Verification
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: process.env.SMTP_PORT === "465" || !process.env.SMTP_PORT,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
            connectionTimeout: 20000, // 20 seconds
            greetingTimeout: 20000,
            socketTimeout: 20000,
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Neural Collective" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Welcome to the Neural Collective - Verification Required",
            html: `
              <div style="font-family: sans-serif; background-color: #000; color: #fff; padding: 40px; border-radius: 10px;">
                <h1 style="color: #fff; border-bottom: 1px solid #333; padding-bottom: 20px;">Welcome to the AI Club, ${fullName}!</h1>
                <p style="font-size: 16px; color: #ccc;">Your application to join the Neural Collective has been received.</p>
                <p style="font-size: 16px; color: #ccc;">We are currently reviewing your profile. In the meantime, please confirm your interest by clicking the button below:</p>
                <div style="text-align: center; margin: 40px 0;">
                  <a href="${process.env.APP_URL || 'http://localhost:3000'}/verify?email=${encodeURIComponent(email)}" 
                     style="background-color: #fff; color: #000; padding: 15px 30px; border-radius: 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                    Verify Application
                  </a>
                </div>
                <p style="font-size: 12px; color: #666;">If you did not apply for this, please ignore this email.</p>
              </div>
            `,
          });
          emailStatus = "Success";
        } catch (emailError: any) {
          console.error("Email Error:", emailError);
          throw new Error(`Email Automation Failed: ${emailError.message}`);
        }
      }

      res.json({ 
        success: true, 
        message: "Registration processed.", 
        debug: { sheetStatus, emailStatus } 
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      res.status(500).json({ 
        error: error.message || "Failed to process registration.", 
        details: error.stack 
      });
    }
  });

  app.get("/api/verify", async (req, res) => {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    try {
      if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
        const serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        
        // Ensure headers are loaded so we can find by column name
        try {
          await sheet.loadHeaderRow();
        } catch (e) {
          // If headers don't exist, no one has registered yet
          return res.status(404).json({ error: "No registrations found in the sheet." });
        }
        
        const rows = await sheet.getRows();

        const row = rows.find(r => r.get("Email") === email);
        if (row) {
          row.set("Status", "Verified");
          await row.save();
          return res.json({ success: true });
        } else {
          return res.status(404).json({ error: "Registration not found." });
        }
      }
      
      // If no Google Sheets configured, just return success for demo purposes
      res.json({ success: true });
    } catch (error: any) {
      console.error("Verification error:", error);
      res.status(500).json({ error: "Failed to verify. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
