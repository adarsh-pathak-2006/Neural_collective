import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Network, ArrowRight, CheckCircle } from 'lucide-react';

export default function Join() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      university: formData.get('university'),
      branchYear: formData.get('branchYear'),
      reason: formData.get('reason'),
    };

    // Basic Validation
    const emailStr = String(data.email);
    if (!emailStr.includes('@') || !emailStr.includes('.')) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        const errorMessage = result.error || 'Failed to register';
        const errorDetails = result.details ? `\nDetails: ${result.details}` : '';
        throw new Error(`${errorMessage}${errorDetails}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-[2rem] max-w-lg w-full text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mx-auto">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Welcome to the Club!</h2>
            <p className="text-white/50">Your application has been received. Check your email for confirmation.</p>
          </div>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-widest text-white/40 hover:text-white underline underline-offset-4 transition-colors"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="uppercase tracking-[0.2em] text-[11px] text-white/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              Recruitment Open 2026
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Neural Collective</span> Today
            </h1>
            <p className="text-lg text-white/50 max-w-md leading-relaxed">
              Fill out the form below to become a member of the campus's premier collective in artificial intelligence and neural computing.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Exclusive Workshops</h3>
                <p className="text-white/40 text-xs">Hands-on sessions with LLMs and Computer Vision.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <Network className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Global Network</h3>
                <p className="text-white/40 text-xs">Connect with researchers from top tech hubs.</p>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="relative w-full aspect-square max-w-[300px] hidden lg:block opacity-20">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px]" />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.1em] text-[10px] text-white/60">Full Name</label>
                  <input 
                    required
                    name="fullName"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.1em] text-[10px] text-white/60">Email Address *</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="john@university.edu"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.1em] text-[10px] text-white/60">Phone Number</label>
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block uppercase tracking-[0.1em] text-[10px] text-white/60">College / University</label>
                  <input 
                    name="university"
                    type="text" 
                    placeholder="Institute of Technology"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.1em] text-[10px] text-white/60">Branch & Year</label>
                <input 
                  name="branchYear"
                  type="text" 
                  placeholder="Computer Science - 3rd Year"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.1em] text-[10px] text-white/60">Reason for joining</label>
                <textarea 
                  name="reason"
                  rows={4}
                  placeholder="Tell us about your interest in AI..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 resize-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-full bg-white text-black font-headline font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white/90 hover:scale-[0.98] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] group flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      Apply for Membership
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="mt-6 text-center text-[9px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                  By joining, you agree to our <br/>collective code of conduct.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
