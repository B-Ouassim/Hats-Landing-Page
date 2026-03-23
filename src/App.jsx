import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, Star, ArrowUpRight, PlayCircle, Globe, Droplet, Wind, ShieldCheck, Cpu, Box, Ruler, Fingerprint } from 'lucide-react';

const FullChicBrand = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax values for the Blueprint section
  const yParallax = useTransform(scrollYProgress, [0.3, 0.6], [0, -100]);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const materials = [
    { icon: <Droplet className="w-5 h-5" />, title: "Hydro-Repel", desc: "Nano-coated fibers that reject water and stains." },
    { icon: <Wind className="w-5 h-5" />, title: "Air-Flow Mesh", desc: "Internal crown ventilation for 24-hour comfort." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Form-Lock", desc: "Proprietary brim memory technology." },
    { icon: <Cpu className="w-5 h-5" />, title: "Digital Trace", desc: "NFC-embedded labels for authenticity verification." }
  ];

  return (
    <div className="bg-[#fcfaf7] text-[#111] overflow-x-hidden selection:bg-red-500 selection:text-white font-sans">
      {/* 1. CUSTOM CURSOR */}
      <motion.div 
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
        className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference invert"
      />

      {/* PROGRESS BAR */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[100]" />

      {/* 2. CHIC NAV */}
      <nav className="p-8 flex justify-between items-baseline fixed w-full z-50 mix-blend-difference text-white">
        <div 
          className="group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">ERA®</h1>
        </div>
        <div className="hidden md:flex gap-12 font-bold text-[10px] uppercase tracking-widest">
          <a href="#archive" className="hover:text-red-500 transition-colors">Archive</a>
          <a href="#material-lab" className="hover:text-red-500 transition-colors">Material Lab</a>
          <a href="#construction" className="hover:text-red-500 transition-colors">Construction</a>
          <a href="#journal" className="hover:text-red-500 transition-colors">Journal</a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-black"></span>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">Est. 2026</span>
            <span className="h-[1px] w-8 bg-black"></span>
          </div>
          <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase">
            ESSENTIAL <br /> 
            <span className="text-transparent stroke-text italic font-serif">SILHOUETTE.</span>
          </h1>
          <p className="mt-6 text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">Designed in Casablanca — Sourced Globally</p>
        </motion.div>

        <motion.img 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
          className="absolute bottom-0 w-[400px] md:w-[600px] grayscale opacity-20 pointer-events-none"
          alt="Hero Cap"
        />
      </section>

      {/* RUNNING MARQUEE */}
      <div className="bg-black py-4 overflow-hidden flex whitespace-nowrap border-y border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center text-white font-black text-[10px] uppercase tracking-[0.4em]"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <Star className="w-3 h-3 fill-red-600 text-red-600" /> 
              Limited Release 001/500
              <Globe className="w-3 h-3" />
              Worldwide Shipping
            </span>
          ))}
        </motion.div>
      </div>

      {/* 4. MATERIAL LAB */}
      <section id="material-lab" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-widest font-mono">Step 01: Elements</span>
              <h2 className="text-5xl font-bold tracking-tighter mt-4 mb-8 uppercase">The Engineering of <br /> Comfort.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {materials.map((m, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="border-t border-zinc-100 pt-6 group">
                    <div className="mb-4 text-zinc-400 group-hover:text-red-600 transition-colors">{m.icon}</div>
                    <h4 className="font-bold uppercase text-sm">{m.title}</h4>
                    <p className="text-zinc-500 text-xs mt-2 leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1575425186775-b8de9a427e67?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000" alt="Fabric detail" />
               <div className="absolute top-8 right-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                  <p className="text-[9px] font-black uppercase tracking-widest">Macro-Fiber v.2</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: 5. CONSTRUCTION / BLUEPRINT SECTION */}
      <section id="construction" className="py-32 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Section 02</span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mt-4 mb-6 leading-none">The <span className="text-red-600">Anatomy</span> Of Era.</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Each Vantage cap is composed of 14 separate panels, double-stitched for structural integrity that lasts a lifetime.</p>
              
              <div className="space-y-6">
                {[
                  { label: "Stitch Count", value: "12,400" },
                  { label: "Panel count", value: "14" },
                  { label: "Weight", value: "112g" },
                  { label: "Durability", value: "Industrial" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-zinc-200 pb-2">
                    <span className="text-[10px] font-black uppercase opacity-40">{stat.label}</span>
                    <span className="text-sm font-black uppercase">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 relative">
               <motion.div style={{ y: yParallax }} className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-2 rounded-2xl shadow-xl rotate-[-2deg]">
                    <img src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=600&auto=format&fit=crop" className="rounded-xl grayscale" alt="Draft" />
                  </div>
                  <div className="bg-white p-2 rounded-2xl shadow-xl translate-y-20 rotate-[3deg]">
                    <img src="https://images.unsplash.com/photo-1596460654975-52628468f921?q=80&w=600&auto=format&fit=crop" className="rounded-xl grayscale" alt="Fabric" />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE HORIZONTAL COLLECTION (ARCHIVE) */}
      <section id="archive" className="py-32 overflow-hidden bg-[#111] text-white scroll-mt-20">
        <div className="px-8 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-6xl font-black uppercase tracking-tighter">Current <br /> <span className="text-red-600">Archive</span></h2>
          </div>
          <div className="hidden md:block border-l border-white/20 pl-8 pb-2">
            <p className="text-[10px] font-bold tracking-widest uppercase opacity-60 max-w-[200px] leading-relaxed">
              Every piece is numbered and archived. No restocks. No compromise.
            </p>
          </div>
        </div>
        
        <div className="flex gap-8 px-8 overflow-x-auto pb-10 no-scrollbar">
          {[
            { id: '01', color: 'Onyx Black', fabric: 'Japanese Twill' },
            { id: '02', color: 'Bone White', fabric: 'Heavy Canvas' },
            { id: '03', color: 'Desert Sage', fabric: 'Hydro-Mesh' },
            { id: '04', color: 'Midnight', fabric: 'Tech-Nylon' },
            { id: '05', color: 'Crimson', fabric: 'Brushed Suede' },
          ].map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ y: -10 }}
              className="min-w-[350px] md:min-w-[450px] group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative">
                <img src={`https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1000&auto=format&fit=crop`} className="w-full h-full object-cover transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" alt="Product" />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black border border-white/40 px-3 py-1 rounded-full uppercase">In Stock</span>
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold opacity-70">Specs:</p>
                    <p className="text-xs uppercase font-black tracking-widest">{item.fabric} / 58cm</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Vantage Snapback {item.id}</h3>
                  <p className="text-zinc-500 text-[10px] font-black mt-1 uppercase tracking-widest">{item.color} — Limited Edition</p>
                </div>
                <p className="text-red-600 font-black text-sm">$75</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. JOURNAL / EDITORIAL SECTION */}
      <section id="journal" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">The Journal</h2>
            <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wider font-medium">Exploring the intersection of modern architecture, industrial design, and street subcultures.</p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-all">View All Entries</button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="group cursor-pointer">
            <div className="h-[500px] bg-zinc-200 rounded-[2.5rem] overflow-hidden mb-8 relative">
              <img src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Article 1" />
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">Culture</div>
            </div>
            <span className="text-[10px] font-black tracking-widest text-red-600 uppercase">March 2026</span>
            <h4 className="text-3xl font-bold uppercase mt-3 leading-tight group-hover:underline decoration-red-600 underline-offset-8">The Casablanca Design Scene: A New Wave.</h4>
          </div>
          <div className="group cursor-pointer">
            <div className="h-[500px] bg-zinc-200 rounded-[2.5rem] overflow-hidden mb-8 relative">
              <img src="https://images.unsplash.com/photo-1523381235312-83b80e074438?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Article 2" />
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">Technicals</div>
            </div>
            <span className="text-[10px] font-black tracking-widest text-red-600 uppercase">February 2026</span>
            <h4 className="text-3xl font-bold uppercase mt-3 leading-tight group-hover:underline decoration-red-600 underline-offset-8">Anatomy of the Perfect Brim Angle.</h4>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER / JOIN THE ARCHIVE */}
      <section className="bg-red-600 py-32 text-white text-center px-6 relative overflow-hidden">
        {/* Grid Guard Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full border-t border-white grid grid-cols-6 divide-x divide-white">
            {[...Array(6)].map((_, i) => <div key={i} className="h-full"></div>)}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-3xl mx-auto relative z-10">
          <Fingerprint className="w-12 h-12 mx-auto mb-8 opacity-40 text-white" />
          <h2 className="text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Access the <br /> Archive.</h2>
          <p className="text-white/80 font-medium mb-12 uppercase tracking-widest text-xs">Join 5,000+ collectors for drop alerts.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" placeholder="YOUR@EMAIL.COM" className="bg-transparent border-2 border-white/30 rounded-full px-8 py-5 outline-none placeholder:text-white/50 focus:border-white transition-all md:w-96 text-sm font-bold tracking-widest" />
            <button className="bg-white text-red-600 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-xl">Subscribe</button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-xl font-black tracking-tighter uppercase">ERA®</h1>
          <p className="text-[10px] font-bold opacity-30 tracking-[0.3em]">ERA STUDIO © 2026 — ALL RIGHTS RESERVED.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-widest">
           <div className="flex flex-col gap-3">
             <span className="opacity-30">Social</span>
             <a href="#" className="hover:text-red-600 transition-colors">Instagram</a>
             <a href="#" className="hover:text-red-600 transition-colors">Twitter</a>
           </div>
           <div className="flex flex-col gap-3">
             <span className="opacity-30">Legal</span>
             <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
             <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
           </div>
           <div className="flex flex-col gap-3">
             <span className="opacity-30">Help</span>
             <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
             <a href="#" className="hover:text-red-600 transition-colors">Shipping</a>
           </div>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .stroke-text { -webkit-text-stroke: 1.5px #111; color: transparent; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .scroll-mt-20 { scroll-margin-top: 5rem; }
      `}</style>
    </div>
  );
};

export default FullChicBrand;