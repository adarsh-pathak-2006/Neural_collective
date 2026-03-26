import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, XCircle, Loader2, ArrowRight } from 'lucide-react';

export default function Verify() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const email = searchParams.get('email');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!email) {
        setStatus('error');
        return;
      }

      try {
        const response = await fetch(`/api/verify?email=${encodeURIComponent(email)}`);
        if (response.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
      }
    };

    verifyEmail();
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-12 md:p-16 rounded-[3rem] max-w-lg w-full text-center space-y-10 relative z-10"
      >
        {status === 'loading' && (
          <>
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <Loader2 className="w-10 h-10 text-white/40" />
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-white font-headline tracking-tight">VERIFYING</h2>
              <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Securing your spot in the collective.</p>
            </div>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white font-headline tracking-tight glow-text">VERIFIED</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Your application for <br/>
                <span className="text-white font-medium">{email}</span> <br/>
                has been confirmed. We will reach out shortly.
              </p>
            </div>
            <div className="pt-6">
              <Link 
                to="/"
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all duration-300 group"
              >
                Return to Hub 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 mx-auto">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-red-500 font-headline tracking-tight">FAILED</h2>
              <p className="text-white/40 text-sm leading-relaxed">The verification link is invalid or has expired.</p>
            </div>
            <div className="pt-6">
              <Link 
                to="/join"
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all duration-300 group"
              >
                Try Registering Again 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
