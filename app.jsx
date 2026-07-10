import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Zap, Cpu, RefreshCw, Server, Users, 
  MapPin, Clock, Disc, Trophy, ShoppingBag, Terminal, 
  ChevronRight, ExternalLink, Activity, Radio
} from 'lucide-react';

export default function RustServerApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [ping, setPing] = useState(14);

  // Simulating live ping fluctuation for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * 5) + 12);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0f4f8] font-sans selection:bg-[#f2643a] selection:text-white overflow-x-hidden relative">
      
      {/* Cinematic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#f2643a]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00f0ff]/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Floating Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 bg-[#12181f]/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f2643a] to-[#ff9e64] flex items-center justify-center shadow-[0_0_20px_rgba(242,100,58,0.4)]">
            <Radio className="w-5 h-5 text-white animate-pulse" />
          </div>
          <span className="font-extrabold tracking-widest text-xl bg-gradient-to-r from-white to-[#8b9bb4] bg-clip-text text-transparent">
            NEXUS<span className="text-[#f2643a]">2026</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#8b9bb4]">
          {['home', 'features', 'status', 'rankings', 'store', 'community'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize transition-all duration-300 hover:text-[#f2643a] relative py-1 ${activeTab === tab ? 'text-[#f2643a]' : ''}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f2643a] shadow-[0_0_10px_#f2643a]" />
              )}
            </button>
          ))}
        </div>

        <a 
          href="steam://connect/SERVER_IP:PORT" 
          className="bg-gradient-to-r from-[#f2643a] to-[#e64a19] text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(242,100,58,0.4)] hover:shadow-[0_0_35px_rgba(242,100,58,0.7)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        >
          <Terminal className="w-4 h-4" /> PLAY NOW
        </a>
      </motion.nav>

      {/* Main Container */}
      <main className="relative z-10 pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* HOME / LANDING VIEW */}
          {activeTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {/* Cinematic Hero */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1217]/60 backdrop-blur-xl p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
                
                <div className="relative z-10 max-w-3xl space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2643a]/10 border border-[#f2643a]/30 text-[#f2643a] text-xs font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#f2643a] animate-ping" /> SECTOR 7 - WIPE ACTIVE
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
                    SURVIVE. BUILD. <span className="bg-gradient-to-r from-[#f2643a] via-[#ff9e64] to-[#00f0ff] bg-clip-text text-transparent">DOMINATE.</span>
                  </h1>
                  <p className="text-[#8b9bb4] text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                    The ultimate high-tier Rust survival experience. Zero lag, max performance optimization, balanced weekly wipes, and unmatched combat mechanics.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href="steam://connect/SERVER_IP:PORT" className="bg-[#f2643a] hover:bg-[#ff7a52] text-white px-8 py-4 rounded-xl font-extrabold tracking-wider shadow-[0_0_30px_rgba(242,100,58,0.5)] transition-all flex items-center gap-3">
                      LAUNCH CONSOLE <ChevronRight className="w-5 h-5" />
                    </a>
                    <a href="https://discord.gg" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-extrabold tracking-wider backdrop-blur-md transition-all flex items-center gap-3">
                      <Disc className="w-5 h-5 text-[#5865F2]" /> JOIN DISCORD
                    </a>
                  </div>
                </div>

                {/* Glass Server Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 pt-8 border-t border-white/10 relative z-10">
                  <div className="bg-black/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
                    <div className="text-[#8b9bb4] text-xs flex items-center gap-1.5 mb-1"><Users className="w-3.5 h-3.5 text-[#f2643a]" /> Online</div>
                    <div className="font-mono font-bold text-lg">138 / 150</div>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
                    <div className="text-[#8b9bb4] text-xs flex items-center gap-1.5 mb-1"><Clock className="w-3.5 h-3.5 text-[#f2643a]" /> Wipe Timer</div>
                    <div className="font-mono font-bold text-lg">2d 14h</div>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
                    <div className="text-[#8b9bb4] text-xs flex items-center gap-1.5 mb-1"><MapPin className="w-3.5 h-3.5 text-[#f2643a]" /> Map Size</div>
                    <div className="font-mono font-bold text-lg">4200 (Proc)</div>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-4 rounded-xl backdrop-blur-md">
                    <div className="text-[#8b9bb4] text-xs flex items-center gap-1.5 mb-1"><Disc className="w-3.5 h-3.5 text-[#5865F2]" /> Community</div>
                    <div className="font-mono font-bold text-lg">18.4K</div>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-4 rounded-xl backdrop-blur-md col-span-2 md:col-span-1">
                    <div className="text-[#8b9bb4] text-xs flex items-center gap-1.5 mb-1"><Activity className="w-3.5 h-3.5 text-[#22c55e]" /> Current Ping</div>
                    <div className="font-mono font-bold text-lg text-[#22c55e]">{ping} ms</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* FEATURES VIEW */}
          {activeTab === 'features' && (
            <motion.div key="features" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">Core <span className="text-[#f2643a]">Features</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Vanilla Experience", desc: "No bloated modifications. Pure gameplay mechanics optimized for absolute tactical survival.", icon: Zap },
                  { title: "Active Admins", desc: "24/7 dedicated professional staff team patrolling to completely eliminate griefing and abuse.", icon: ShieldCheck },
                  { title: "Anti Cheat", desc: "Proprietary kernel-level integration ensuring an uncompromised secure environment.", icon: Cpu },
                  { title: "Weekly Wipes", desc: "Refreshed maps and blueprints on scheduled intervals to maintain high endgame intensity.", icon: RefreshCw },
                  { title: "High Performance", desc: "Dedicated high-frequency enterprise hardware delivering zero tickrate jitter at 144 FPS.", icon: Server }
                ].map((feat, idx) => (
                  <div key={idx} className="bg-[#12181f]/40 border border-white/10 backdrop-blur-xl p-8 rounded-2xl hover:border-[#f2643a]/50 transition-all duration-300 group">
                    <feat.icon className="w-8 h-8 text-[#f2643a] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                    <p className="text-[#8b9bb4] text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STATUS VIEW */}
          {activeTab === 'status' && (
            <motion.div key="status" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">Live <span className="text-[#f2643a]">Dashboard</span></h2>
              <div className="bg-[#12181f]/40 border border-white/10 backdrop-blur-xl p-8 rounded-2xl space-y-6">
                {[
                  { label: "Server Load / Ticks", val: "1000 Hz Stable", color: "text-[#22c55e]" },
                  { label: "Average FPS Rate", val: "142.4 FPS", color: "text-[#00f0ff]" },
                  { label: "Uptime Metric", val: "99.98% (No Interruption)", color: "text-white" },
                  { label: "Server Geolocation", val: "Frankfurt, EU-Central", color: "text-white" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 font-mono">
                    <span className="text-[#8b9bb4] text-sm">{stat.label}</span>
                    <span className={`font-bold ${stat.color}`}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* RANKINGS VIEW */}
          {activeTab === 'rankings' && (
            <motion.div key="rankings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">Top <span className="text-[#f2643a]">Leaderboard</span></h2>
              <div className="bg-[#12181f]/40 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
                {[
                  { rank: 1, name: "Vortex_99", kills: 412, status: "DOMINATING" },
                  { rank: 2, name: "GhostRider", kills: 389, status: "ACTIVE" },
                  { rank: 3, name: "SavageBeast", kills: 310, status: "ACTIVE" }
                ].map((row) => (
                  <div key={row.rank} className="flex items-center justify-between p-6 border-b border-white/5 font-mono">
                    <div className="flex items-center gap-4">
                      <Trophy className={`w-5 h-5 ${row.rank === 1 ? 'text-yellow-400' : 'text-[#8b9bb4]'}`} />
                      <span className="font-bold">#{row.rank} {row.name}</span>
                    </div>
                    <span className="text-[#f2643a] font-bold">{row.kills} Kills</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STORE VIEW */}
          {activeTab === 'store' && (
            <motion.div key="store" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">VIP <span className="text-[#f2643a]">Store</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#12181f]/40 border border-white/10 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <ShoppingBag className="w-8 h-8 text-[#f2643a] mb-4" />
                    <h3 className="text-2xl font-bold mb-2">VIP Package</h3>
                    <p className="text-[#8b9bb4] text-sm mb-6">Skinbox access, priority queue entry, and custom chat prefixes.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <span className="font-mono text-xl font-bold text-[#f2643a]">$9.99</span>
                    <button className="bg-[#f2643a] text-white px-6 py-2.5 rounded-xl font-bold text-sm">Purchase</button>
                  </div>
                </div>
                <div className="bg-[#12181f]/40 border border-white/10 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <ShoppingBag className="w-8 h-8 text-[#00f0ff] mb-4" />
                    <h3 className="text-2xl font-bold mb-2">VIP+ Elite</h3>
                    <p className="text-[#8b9bb4] text-sm mb-6">All VIP perks plus remote recycler, large skinbox capacity, and reserve slots.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <span className="font-mono text-xl font-bold text-[#00f0ff]">$19.99</span>
                    <button className="bg-[#00f0ff] text-black px-6 py-2.5 rounded-xl font-bold text-sm">Purchase</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* COMMUNITY VIEW */}
          {activeTab === 'community' && (
            <motion.div key="community" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">Join Our <span className="text-[#f2643a]">Discord</span></h2>
              <div className="bg-[#12181f]/40 border border-white/10 backdrop-blur-xl p-10 rounded-2xl text-center space-y-6">
                <Disc className="w-16 h-16 text-[#5865F2] mx-auto animate-bounce" />
                <h3 className="text-3xl font-bold">Over 18,400+ Survivors Connected</h3>
                <p className="text-[#8b9bb4] max-w-lg mx-auto">Get notified for map wipes, participate in community events, trade skins, and apply for clan positions.</p>
                <a href="https://discord.gg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3.5 rounded-xl font-bold">
                  Connect Now <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Futuristic Minimal Footer */}
      <footer className="border-t border-white/10 bg-[#080c10]/80 py-8 px-6 text-center text-xs text-[#8b9bb4] relative z-10">
        <p>© 2026 NEXUS RUST NETWORK. All rights reserved. Not affiliated with Facepunch Studios.</p>
      </footer>

    </div>
  );
}
