import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Terminal, Network, ChevronDown } from 'lucide-react';

export default function Landing() {
  return (
    <div className="relative bg-black font-sans">
      {/* Hero Section */}
      <header className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        
        {/* 50% Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex-grow flex flex-col items-center text-center pt-[200px] lg:pt-[280px] pb-[102px] px-6">
          <div className="flex flex-col items-center gap-[40px]">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-[8px] px-[16px] py-[8px] bg-white/10 border border-white/20 rounded-[20px]"
            >
              <div className="w-[4px] h-[4px] rounded-full bg-white" />
              <p className="text-[13px] font-medium tracking-tight">
                <span className="text-white/60">Recruitment open for</span>
                <span className="text-white"> Spring 2026</span>
              </p>
            </motion.div>

            {/* Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-[613px]"
            >
              <h1 
                className="text-[36px] lg:text-[56px] font-medium tracking-tight leading-[1.28] text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: 'linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 115%)'
                }}
              >
                The Future of Intelligence Starts Here
              </h1>
              
              {/* Subtitle */}
              <p className="mt-[24px] text-[15px] font-normal text-white/70 leading-relaxed max-w-[680px] mx-auto">
                Join the campus's premier AI collective. We build, research, and push the boundaries of neural architectures, creating a community of visionary student engineers.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/join" className="relative group">
                {/* Outer Border Pill */}
                <div className="rounded-full border-[0.6px] border-white p-[1px]">
                  {/* Inner White Pill */}
                  <div className="bg-white rounded-full px-[29px] py-[11px] relative overflow-hidden">
                    {/* Glow Streak */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]" />
                    <span className="text-black text-[14px] font-medium relative z-10">Apply Now</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-medium mb-4">The Next Frontier of Campus Innovation</h2>
            <p className="text-white/50">Our community is built on the pillars of research, collaboration, and high-performance engineering.</p>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mb-4 hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Research Lab',
              desc: 'Collaborate on cutting-edge neural architectures and decentralized AI models designed for global scale.',
              icon: Brain,
              img: 'https://picsum.photos/seed/ai-neural/800/450'
            },
            {
              title: 'Build Sprints',
              desc: 'Intensive weekend hackathons where ideas transform into production-ready code within hours, not weeks.',
              icon: Terminal,
              img: 'https://picsum.photos/seed/code-sprint/800/450'
            },
            {
              title: 'Industry Network',
              desc: "Direct pipelines to the world's leading AI labs and tech giants for high-impact careers.",
              icon: Network,
              img: 'https://picsum.photos/seed/network-global/800/450'
            }
          ].map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-[2rem] p-8 flex flex-col h-full hover:border-white/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <feature.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-xl mb-4 font-medium">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">{feature.desc}</p>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5">
                <img 
                  src={feature.img} 
                  alt={feature.title}
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Section */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 glass-panel rounded-[2rem] p-12 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-3xl font-medium mb-6">Designed for the <br/><span className="text-white/40">Student Architects of Tomorrow</span></h4>
                <p className="text-white/60 max-w-md mb-8">The Neural Collective is more than a club—it's an incubator for the next generation of AI infrastructure. We provide the tools, the network, and the space to build what's next.</p>
              </div>
              <div className="flex gap-4">
                {['Research', 'Build', 'Scale'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000">
              <img 
                src="https://picsum.photos/seed/abstract-geo/600/800" 
                alt="Abstract"
                className="w-full h-full object-contain object-right-bottom grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="lg:col-span-4 glass-panel rounded-[2rem] p-12 bg-white flex flex-col justify-center text-black relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10">
              <div className="mb-12">
                <h4 className="font-headline text-2xl font-bold tracking-tight mb-2">JOIN THE COLLECTIVE</h4>
                <p className="text-black/60 text-sm leading-relaxed">Applications for the Spring 2026 cohort are now open. Limited seats available.</p>
              </div>
              <div className="space-y-4">
                <Link 
                  to="/join"
                  className="w-full bg-black text-white font-headline uppercase tracking-[0.2em] text-[10px] font-bold py-5 rounded-xl hover:bg-black/90 hover:scale-[0.98] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  Apply for Membership
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[9px] text-center text-black/40 uppercase tracking-widest">No prior AI experience required</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
