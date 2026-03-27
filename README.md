# Neural Collective: AI College Club Registration Portal

Welcome to the **Neural Collective**, the campus's premier AI collective for student builders and researchers. This is a high-fidelity, full-stack registration application designed to manage club recruitment, member onboarding, and project collaboration.

## 🚀 Features

- **Futuristic UI**: A cinematic "Digital Void" aesthetic built with React, Tailwind CSS, and Framer Motion.
- **Full-Stack Integration**: Express.js backend with Vite middleware for seamless development and production serving.
- **Google Sheets Database**: Automated registration storage using the Google Sheets API.
- **Email Verification**: Professional verification emails sent via SMTP (Nodemailer).
- **Member Hub**: A dedicated portal for project documentation and research resources.
- **Admin Dashboard**: A centralized "Recruitment Center" for managing applications and tracking stats.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React, Framer Motion.
- **Backend**: Node.js, Express.js.
- **Integrations**: Google Spreadsheet API, Google Auth Library, Nodemailer.
- **Deployment**: Optimized for Cloud Run, Render, or Railway.

## 📂 Directory Structure

```text
neural-collective/
├── server.ts               # Express backend & API routes
├── src/                    # Frontend source code
│   ├── components/         # Global Layout & Navbar
│   ├── pages/              # Landing, Join, DevHub, Onboarding, Dashboard, Verify
│   └── lib/                # Tailwind & Utility helpers
├── metadata.json           # App metadata & permissions
└── package.json            # Scripts & Dependencies
```

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/neural-collective.git
   cd neural-collective
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your credentials (see `.env.example`).

4. **Run in Development**:
   ```bash
   npm run dev
   ```
spreadsheet link- https://docs.google.com/spreadsheets/d/13CDC2dgSPrSBUDgMxksuZyBm0g4hkCrYCS_nmA_3akg/edit?usp=sharing


5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```


---
Built with ❤️ by the **Neural Collective** Core Team.
