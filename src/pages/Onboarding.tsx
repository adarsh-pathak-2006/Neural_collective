import { motion } from 'motion/react';
import { UserPlus, ShieldCheck, Key, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Apply for Membership',
    desc: 'Complete the registration form to enter our initial intake pool. We require a brief overview of your technical background and vision.',
    icon: UserPlus,
    status: 'Action Required',
    btn: 'Apply Now',
    link: '/join'
  },
  {
    num: '02',
    title: 'Review Process',
    desc: 'Wait for the admissions team to review your application. We prioritize alignment with the Collective core values and technical excellence.',
    icon: ShieldCheck,
    status: 'Review Pending'
  },
  {
    num: '03',
    title: 'Orientation',
    desc: "Receive your credentials and access to the Member Hub. This is where you'll find our internal projects and neural architecture blueprints.",
    icon: Key,
    status: 'Awaiting Verification'
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Join your first sprint or research group. Collaborate with the collective to build the next generation of autonomous intelligence.',
    icon: Rocket,
    status: 'Final Milestone'
  }
];

export default function Onboarding() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-white/[0.02] blur-[100px] pointer-events-none" />

      {/* Hero */}
      <section className="mb-32 text-center md:text-left relative z-10">
        <div className="inline-block mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40 font-headline font-bold">
          Recruitment Portal
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-10 font-headline uppercase">
          The Neural Path:<br/>
          <span className="text-white/20">Your</span> Journey <span className="text-white/20">Starts Here.</span>
        </h1>
        <p className="max-w-2xl text-white/40 text-lg md:text-xl leading-relaxed font-medium">
          Joining the campus's premier AI collective is a multi-step process designed to curate a community of the world's most visionary student builders.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, i) => (
          <motion.div 
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 flex flex-col justify-between min-h-[450px] rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-16">
                <span className="text-white/10 text-6xl font-bold tracking-tighter font-headline group-hover:text-white/20 transition-colors">{step.num}</span>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-12">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl text-white mb-4 font-headline font-bold uppercase tracking-tight">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 font-medium">
                {step.desc}
              </p>
            </div>
            
            <div className="relative z-10">
              {step.btn ? (
                <Link 
                  to={step.link || '#'}
                  className="w-full py-5 rounded-full bg-white text-black font-headline font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/90 hover:scale-[0.98] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  {step.btn}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/20 flex items-center gap-3 font-bold border-t border-white/5 pt-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                  {step.status}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Contextual Visual */}
      <section className="mt-32 rounded-[3rem] overflow-hidden border border-white/5 relative h-[500px] group">
        <img 
          src="https://picsum.photos/seed/void-neural/1600/800" 
          alt="The Project Lab"
          className="w-full h-full object-cover opacity-30 grayscale transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-16 left-16 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-bold">24 Active Projects</span>
          </div>
          <h4 className="text-4xl md:text-5xl text-white mb-4 font-headline font-bold uppercase tracking-tighter">The Project Lab</h4>
          <p className="text-white/40 text-base leading-relaxed font-medium">Our collaborative space is currently hosting 24 active student projects. Your seat is waiting in the lab where intelligence grows.</p>
        </div>
      </section>
    </div>
  );
}
