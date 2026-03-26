import { motion } from 'motion/react';
import { Search, Filter, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const submissions = [
  {
    id: 'EH',
    name: 'Elena Helvey',
    email: 'elena.h@university.edu',
    phone: '+1 415-555-0128',
    college: 'Stanford University',
    detail: 'Computer Science • Junior',
    reason: 'Passionate about decentralized systems and high-frequency architecture...',
    timestamp: 'Oct 24, 09:12'
  },
  {
    id: 'MK',
    name: 'Marcus Kane',
    email: 'm.kane@mit.edu',
    phone: '+1 617-555-0941',
    college: 'MIT',
    detail: 'Aeronautics • Senior',
    reason: 'Looking to bridge the gap between aerospace engineering and web3...',
    timestamp: 'Oct 24, 08:45'
  },
  {
    id: 'SL',
    name: 'Sarah Lindon',
    email: 'sarah.l@berkeley.edu',
    phone: '+1 510-555-0211',
    college: 'UC Berkeley',
    detail: 'Electrical Engineering • Sophomore',
    reason: 'Interested in hardware-level security for cold storage solutions...',
    timestamp: 'Oct 23, 22:30'
  },
  {
    id: 'JD',
    name: 'Julian Drax',
    email: 'jd@oxford.ac.uk',
    phone: '+44 20-555-0100',
    college: 'Oxford University',
    detail: 'Mathematics • PhD',
    reason: 'Researching zero-knowledge proofs and lattice-based cryptography...',
    timestamp: 'Oct 23, 19:14'
  },
  {
    id: 'AX',
    name: 'Avery Xiao',
    email: 'avery.x@tsinghua.edu.cn',
    phone: '+86 10-555-8822',
    college: 'Tsinghua University',
    detail: "Informatics • Master's",
    reason: 'Designing user-centric interfaces for complex DeFi protocols...',
    timestamp: 'Oct 23, 15:42'
  }
];

export default function Dashboard() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-white/[0.02] blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors group mb-2"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-headline font-bold">Recruitment Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter glow-text font-headline uppercase">Member Hub</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-4 focus-within:border-white/20 transition-all">
            <Search className="w-4 h-4 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH ENTRIES..."
              className="bg-transparent border-none focus:ring-0 text-[10px] tracking-widest text-white placeholder:text-white/20 w-48 uppercase"
            />
          </div>
          <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all active:scale-95">
            <Filter className="w-4 h-4 text-white/60" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Filter</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
        {[
          { label: 'Total Submissions', val: '1,284', sub: '+12% VS LAST WEEK' },
          { label: 'Completion Rate', val: '94.2%', sub: 'AVG. 2M 14S' },
          { label: 'Top Branch', val: 'CS', sub: '42% OF TOTAL' }
        ].map(stat => (
          <div key={stat.label} className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all group">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-headline font-bold">{stat.label}</p>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold tracking-tighter font-headline">{stat.val}</span>
              <span className="text-[9px] text-white/20 tracking-widest font-bold">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="glass-panel rounded-[2.5rem] overflow-hidden relative z-10 border border-white/5 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-8 text-[9px] uppercase tracking-[0.3em] text-white/30 font-headline font-bold">Name</th>
                <th className="px-8 py-8 text-[9px] uppercase tracking-[0.3em] text-white/30 font-headline font-bold">Contact</th>
                <th className="px-8 py-8 text-[9px] uppercase tracking-[0.3em] text-white/30 font-headline font-bold">Academic</th>
                <th className="px-8 py-8 text-[9px] uppercase tracking-[0.3em] text-white/30 font-headline font-bold">Reason</th>
                <th className="px-8 py-8 text-[9px] uppercase tracking-[0.3em] text-white/30 font-headline font-bold text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {submissions.map((row) => (
                <tr key={row.email} className="group hover:bg-white/[0.03] transition-colors border-b border-white/5 last:border-0">
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-white/40 border border-white/10 group-hover:border-white/20 transition-colors font-bold">
                        {row.id}
                      </div>
                      <span className="text-white font-medium tracking-tight text-base">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-white/70 text-xs tracking-tight">{row.email}</span>
                      <span className="text-[10px] text-white/30 tracking-widest font-mono">{row.phone}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-white/70 text-xs tracking-tight">{row.college}</span>
                      <span className="text-[10px] text-white/30 tracking-widest uppercase">{row.detail}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <p className="text-white/40 text-xs line-clamp-1 max-w-xs leading-relaxed">{row.reason}</p>
                  </td>
                  <td className="px-8 py-8 text-right">
                    <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">{row.timestamp}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-10 py-8 border-t border-white/5 bg-white/[0.01]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">Showing 5 of 1,284 entries</p>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 transition-all active:scale-90">
              <ChevronLeft className="w-4 h-4 text-white/40" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-black text-[10px] font-bold shadow-lg">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 transition-all text-[10px] text-white/40">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 transition-all text-[10px] text-white/40">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 transition-all active:scale-90">
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
