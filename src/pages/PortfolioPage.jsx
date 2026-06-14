import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import TestimonialCard from '../components/ui/TestimonialCard';
import GlowButton from '../components/ui/GlowButton';
import SectionHeading from '../components/ui/SectionHeading';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'FinTech', 'D2C / Beauty', 'B2B SaaS', 'Real Estate', 'Education'];

  const filteredPortfolio = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.type === activeFilter);

  const testimonials = [
    { name: "Rohit Sharma", role: "Founder, FinTechX", quote: "GhostPenStudio completely transformed our LinkedIn presence. We closed 3 major enterprise deals directly from the inbound leads they generated in month two.", image: "https://i.pravatar.cc/150?img=11" },
    { name: "Ananya Patel", role: "CMO, Glow Naturals", quote: "They don't just create content; they build communities. Our Instagram engagement rate went from 1.2% to 6.5% after their visual revamp.", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Karthik Reddy", role: "CEO, BuildSaaS", quote: "The SEO overhaul was a game-changer. We went from invisible to ranking top 3 for our most competitive commercial keywords within 4 months.", image: "https://i.pravatar.cc/150?img=8" }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative min-h-[45vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-gradient-dark-mesh opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-brand-light mb-6 uppercase tracking-tight">
            OUR SUCCESS STORIES
          </h1>
          <p className="font-body text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Where data meets design, and strategy becomes growth.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-brand-pink text-white shadow-glow-pink scale-105' 
                    : 'bg-brand-slate text-brand-muted hover:text-brand-light hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Portfolio Masonry/Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
          {filteredPortfolio.map((item, i) => {
            // Alternate sizes: make the first item span 2 rows if it's not the last one in the row
            const isLarge = i % 3 === 0 || i % 3 === 1;
            
            // Tailwind class mappings for colors
            const colorClasses = {
              blue: {
                gradient: "from-brand-blue/40 to-brand-blue/5",
                iconText: "text-brand-blue",
                badgeBg: "bg-brand-blue/90",
                shadow: "group-hover:shadow-glow-blue",
                hoverText: "text-brand-blue"
              },
              pink: {
                gradient: "from-brand-pink/40 to-brand-pink/5",
                iconText: "text-brand-pink",
                badgeBg: "bg-brand-pink/90",
                shadow: "group-hover:shadow-glow-pink",
                hoverText: "text-brand-pink"
              },
              lime: {
                gradient: "from-brand-lime/40 to-brand-lime/5",
                iconText: "text-brand-lime",
                badgeBg: "bg-brand-lime/90",
                shadow: "group-hover:shadow-glow-lime",
                hoverText: "text-brand-lime"
              },
              gold: {
                gradient: "from-brand-gold/40 to-brand-gold/5",
                iconText: "text-brand-gold",
                badgeBg: "bg-brand-gold/90",
                shadow: "group-hover:shadow-glow-gold",
                hoverText: "text-brand-gold"
              },
              purple: {
                gradient: "from-purple-500/40 to-purple-500/5",
                iconText: "text-purple-400",
                badgeBg: "bg-purple-600/90",
                shadow: "group-hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]",
                hoverText: "text-purple-400"
              }
            };
            
            const theme = colorClasses[item.color] || colorClasses.blue;

            return (
              <div 
                key={item.id} 
                className={`bg-brand-slate rounded-3xl overflow-hidden group cursor-pointer border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 flex flex-col ${isLarge ? 'md:row-span-2' : ''}`}
              >
                {/* Top Section - Gradient Placeholder */}
                <div className={`relative w-full ${isLarge ? 'h-[60%]' : 'h-48'} bg-gradient-to-br ${theme.gradient} overflow-hidden flex items-center justify-center p-6`}>
                  {/* Decorative element mimicking a brand asset */}
                  <div className={`w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700`}>
                     <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-md`}></div>
                  </div>
                  
                  {/* Metric Pill */}
                  <div className={`absolute top-4 right-4 ${theme.badgeBg} text-white rounded-full px-4 py-1.5 text-sm font-display font-bold shadow-lg transition-shadow duration-300 ${theme.shadow}`}>
                    {item.metric}
                  </div>
                </div>
                
                {/* Bottom Info Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-brand-slate">
                  <span className="text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">
                    {item.type}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-brand-light mb-3">
                    {item.client}
                  </h3>
                  <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Read Case Study Link */}
                  <div className={`mt-auto flex items-center gap-2 font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${theme.hoverText}`}>
                    View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Testimonials Row */}
      <section className="py-24 border-y border-white/5 bg-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="CLIENT LOVE" 
            title="Don't Just Take Our Word For It." 
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
            {testimonials.map((t, idx) => (
              <TestimonialCard 
                key={idx}
                name={t.name}
                role={t.role}
                quote={t.quote}
                image={t.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-slate to-brand-dark"></div>
        <div className="absolute inset-0 bg-gradient-dark-mesh opacity-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-light mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-brand-muted mb-12">
            Tell us about your brand. We'll tell you how we'd grow it.
          </p>
          
          <div className="flex justify-center w-full">
            <GlowButton variant="filled" color="pink" href="/contact">
              REQUEST A FREE STRATEGY CALL
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
}
