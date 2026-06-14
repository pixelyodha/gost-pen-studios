import { CheckCircle2, Zap, ShieldCheck, TrendingUp, Sparkles, Target, Handshake } from 'lucide-react';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import FinalCTA from '../components/ui/FinalCTA';

export default function AboutPage() {
  const team = [
    { name: "Rahul Sharma", role: "Creative Director", city: "Mumbai" },
    { name: "Priya Desai", role: "Head of Strategy", city: "Delhi" },
    { name: "Arjun Reddy", role: "Lead Developer", city: "Bangalore" },
    { name: "Neha Patel", role: "Design Lead", city: "Pune" }
  ];

  return (
    <div className="bg-brand-dark min-h-screen pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-dark-mesh opacity-40"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-brand-light uppercase tracking-tight mb-6">
              MEET THE <span className="bg-gradient-blue-pink bg-clip-text text-transparent">MINDS</span>
            </h1>
            <p className="font-accent italic text-brand-muted text-xl md:text-2xl leading-relaxed max-w-lg">
              A remote-first studio of creative specialists, strategists, and storytellers — united by one obsession: brand growth.
            </p>
          </div>
          
          {/* Team Decorative Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {team.map((member, idx) => {
              const initials = member.name.split(' ').map(n => n[0]).join('');
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-blue-pink flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                    {initials}
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-light mb-1">{member.name}</h3>
                  <p className="text-brand-pink text-xs font-bold uppercase tracking-wide mb-3">{member.role}</p>
                  <span className="bg-brand-slate text-brand-muted text-xs px-3 py-1 rounded-full border border-white/5">
                    {member.city}
                  </span>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-brand-slate/20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-brand-light leading-tight tracking-tight mb-12 flex flex-col gap-4">
            <span>We build <span className="bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">emotional connections.</span></span>
            <span>We help you <span className="bg-gradient-to-r from-brand-pink to-fuchsia-400 bg-clip-text text-transparent">stand out.</span></span>
            <span>We establish <span className="bg-gradient-to-r from-brand-lime to-green-400 bg-clip-text text-transparent">trust.</span></span>
          </div>
          
          <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            We aren't just another agency churning out templates. We're an extension of your team, obsessed with combining breathtaking aesthetics with hard, measurable ROI. No corporate fluff—just strategic storytelling that actually works.
          </p>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-pink text-xs font-bold tracking-widest uppercase border border-brand-pink/20 bg-brand-pink/10 rounded-full px-4 py-1.5">
            OUR DNA
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-light mt-6">
            The Principles We Operate By
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-slate rounded-2xl p-8 border border-white/5 hover:border-brand-blue/30 transition-colors group">
            <Target className="text-brand-blue mb-6 group-hover:scale-110 transition-transform origin-left" size={40} strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-brand-blue mb-3">Clarity Over Cleverness</h3>
            <p className="text-brand-muted leading-relaxed">
              We don't hide behind jargon. We communicate clearly, ensuring your brand's message is instantly understood by your exact target audience.
            </p>
          </div>
          
          <div className="bg-brand-slate rounded-2xl p-8 border border-white/5 hover:border-brand-gold/30 transition-colors group">
            <Zap className="text-brand-gold mb-6 group-hover:scale-110 transition-transform origin-left" size={40} strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-brand-gold mb-3">Strategy Before Execution</h3>
            <p className="text-brand-muted leading-relaxed">
              A beautiful design without a strategy is just art. We map the objective, the funnel, and the metrics before we ever pick up the pen.
            </p>
          </div>
          
          <div className="bg-brand-slate rounded-2xl p-8 border border-white/5 hover:border-brand-lime/30 transition-colors group">
            <Handshake className="text-brand-lime mb-6 group-hover:scale-110 transition-transform origin-left" size={40} strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-brand-lime mb-3">Radical Transparency</h3>
            <p className="text-brand-muted leading-relaxed">
              No black box processes. You see what we see. We share our wins, our losses, and exactly how we're optimizing your budget.
            </p>
          </div>
          
          <div className="bg-brand-slate rounded-2xl p-8 border border-white/5 hover:border-brand-pink/30 transition-colors group">
            <TrendingUp className="text-brand-pink mb-6 group-hover:scale-110 transition-transform origin-left" size={40} strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl text-brand-pink mb-3">Results, Not Excuses</h3>
            <p className="text-brand-muted leading-relaxed">
              We tie our success directly to yours. We don't celebrate outputs (posts, emails); we celebrate outcomes (leads, sales, growth).
            </p>
          </div>
        </div>
      </section>

      {/* 4. Process Timeline */}
      <ProcessTimeline />

      {/* 5. Culture Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Culture Text */}
          <div>
            <h2 className="font-display font-extrabold text-4xl text-brand-light mb-8">
              THE GHOSTPEN WAY
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-light text-lg mb-1">Remote-First Efficiency</h4>
                  <p className="text-brand-muted text-sm">We hire the best talent across India, not just who happens to live within a 10km radius of an office. This means higher quality output, faster.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center shrink-0">
                  <Zap size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-light text-lg mb-1">Asynchronous Communication</h4>
                  <p className="text-brand-muted text-sm">Fewer pointless meetings, more deep work. We use structured async updates so our creatives spend their time actually creating.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center shrink-0">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-light text-lg mb-1">Continuous Learning</h4>
                  <p className="text-brand-muted text-sm">The digital landscape changes weekly. We invest heavily in upskilling our team so your brand stays ahead of the algorithmic curve.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Day in the Life Timeline */}
          <div className="bg-brand-slate rounded-3xl p-8 border border-white/5 relative">
            <h3 className="font-bold text-brand-light mb-8 uppercase tracking-widest text-sm border-b border-white/5 pb-4">
              A Day in the Studio
            </h3>
            
            <div className="relative pl-6 border-l border-brand-pink/30 flex flex-col gap-8">
              <div className="relative">
                <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-pink"></div>
                <span className="text-brand-pink text-xs font-bold mb-1 block">9:00 AM</span>
                <div className="bg-brand-dark rounded-xl p-4 border border-white/5 flex items-center gap-3">
                  <span className="text-2xl">☕</span>
                  <span className="text-brand-light font-medium text-sm">Sync & Strategy alignment</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-blue"></div>
                <span className="text-brand-blue text-xs font-bold mb-1 block">11:30 AM</span>
                <div className="bg-brand-dark rounded-xl p-4 border border-white/5 flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  <span className="text-brand-light font-medium text-sm">Deep Work: Content Creation</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-lime"></div>
                <span className="text-brand-lime text-xs font-bold mb-1 block">3:00 PM</span>
                <div className="bg-brand-dark rounded-xl p-4 border border-white/5 flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-brand-light font-medium text-sm">Analytics & Optimization</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-gold"></div>
                <span className="text-brand-gold text-xs font-bold mb-1 block">5:30 PM</span>
                <div className="bg-brand-dark rounded-xl p-4 border border-white/5 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-brand-light font-medium text-sm">Client Delivery & Review</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. CTA Banner */}
      <FinalCTA title="Become Our Next Success Story." subtitle="Let's build a brand that people actually care about." />
      
    </div>
  );
}
