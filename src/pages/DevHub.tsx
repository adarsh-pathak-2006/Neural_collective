import { motion } from 'motion/react';
import { Search, Code, Terminal, FlaskConical, ArrowRight, Star, GitFork, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export default function DevHub() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-2 text-[10px]">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            Central Intelligence Hub
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-white">
            The Project Lab<span className="text-white/20">.</span>
          </h1>
          <p className="max-w-2xl text-white/60 text-lg md:text-xl mb-12 leading-relaxed">
            Access the foundational layers of the Neural Collective. Query, build, and deploy AI-driven projects across the campus network.
          </p>
          
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-white/40" />
            </div>
            <input 
              type="text" 
              placeholder="SEARCH DOCUMENTATION (E.G. 'NEURAL_HOOKS')"
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-6 text-xs tracking-widest uppercase focus:outline-none focus:border-white transition-all placeholder:text-white/20"
            />
            <div className="absolute inset-y-2 right-2 hidden md:flex items-center px-4 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-tighter text-white/40">
              ⌘ K
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-panel p-8 rounded-2xl md:col-span-2 group">
            <div className="flex justify-between items-start mb-12">
              <Code className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] tracking-[0.2em] text-white/40">v2.4.0-STABLE</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Project Docs</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">Internal documentation for our core AI projects. Learn how to contribute to our neural architectures.</p>
            <a href="#" className="inline-flex items-center gap-2 text-xs tracking-widest text-white group-hover:gap-4 transition-all">
              EXPLORE PROJECTS <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="glass-panel p-8 rounded-2xl group">
            <div className="flex justify-between items-start mb-12">
              <Terminal className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-medium mb-4">SDK Labs</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">Native wrappers for Python, Rust, and TypeScript. Modular by design.</p>
            <a href="#" className="inline-flex items-center gap-2 text-xs tracking-widest text-white/60 hover:text-white transition-all">
              VIEW SDKS
            </a>
          </div>

          <div className="glass-panel p-8 rounded-2xl group">
            <div className="flex justify-between items-start mb-12">
              <FlaskConical className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Sandbox</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">Test neural architectures in an isolated VM environment.</p>
            <a href="#" className="inline-flex items-center gap-2 text-xs tracking-widest text-white/60 hover:text-white transition-all">
              LAUNCH TESTNET
            </a>
          </div>

          <div className="glass-panel p-8 rounded-2xl md:col-span-4 flex flex-col md:flex-row gap-8 items-center bg-white/[0.02]">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.2em] bg-white/10 px-3 py-1 rounded text-white/80">SYSTEM_FEED</span>
                <span className="text-[10px] tracking-[0.2em] text-white/40">UPTIME 99.99%</span>
              </div>
              <h3 className="text-3xl font-medium mb-4">Collective Logs</h3>
              <p className="text-white/60 text-sm max-w-xl">Monitor real-time project updates and research progress. Detailed telemetry for every contribution within the Neural Collective.</p>
            </div>
            <div className="w-full md:w-64 h-32 rounded-xl bg-black border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 p-4 font-mono text-[8px] text-white/30 overflow-hidden leading-tight">
                [PROJECT] NEURAL_SYNC_COMPLETE<br/>
                [MEMBER] NEW_CONTRIBUTION_ACCEPTED<br/>
                [SYSTEM] RESEARCH_PAPER_PUBLISHED<br/>
                [PROJECT] SYNCING_MODEL_9281...<br/>
                [SYSTEM] VALIDATION_PASSED<br/>
                [MEMBER] PEER_REVIEW_SUCCESS
              </div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-medium mb-2 tracking-tight uppercase">Community Projects</h2>
            <p className="text-white/50 text-sm">Verified open-source contributions to the hub.</p>
          </div>
          <button className="text-[10px] tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-all">VIEW_ALL_REPOS</button>
        </div>
        
        <div className="space-y-4">
          {[
            { name: 'VOID_SCANNER_CORE', desc: 'Real-time visualization engine for latent space navigation.', status: 'Production', stars: '1.2k', forks: '243', color: 'bg-emerald-500' },
            { name: 'NEURAL_BRIDGE_PY', desc: 'Python bindings for the cross-chain AI consensus layer.', status: 'Beta_Testing', stars: '850', forks: '98', color: 'bg-amber-500' },
            { name: 'ETH_SENTINEL', desc: 'Automated security auditing tool for AI smart contracts.', status: 'Stable', stars: '3.4k', forks: '512', color: 'bg-white' }
          ].map(project => (
            <div key={project.name} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/10 transition-all group">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center font-headline text-lg group-hover:bg-white group-hover:text-black transition-colors">
                  {project.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                  <p className="text-xs text-white/50">{project.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", project.color)} />
                  <span className="text-[10px] tracking-widest text-white/40 uppercase">{project.status}</span>
                </div>
                <div className="flex items-center gap-4 text-white/40 text-xs">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {project.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {project.forks}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white uppercase">Ready to build?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-12">Join a project track today. Start contributing to our open-source AI initiatives and research papers.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold tracking-widest text-xs uppercase hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              JOIN PROJECT TRACK
            </button>
            <button className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-full font-bold tracking-widest text-xs uppercase hover:bg-white/20 transition-all backdrop-blur-md">
              CONTACT CORE TEAM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
