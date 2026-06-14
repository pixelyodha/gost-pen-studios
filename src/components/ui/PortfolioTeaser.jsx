import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import SectionHeading from './SectionHeading';
import GlowButton from './GlowButton';

export default function PortfolioTeaser() {
  // We want to show works "section vise" (by category)
  const categories = ['FinTech', 'D2C / Beauty', 'B2B SaaS'];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeading 
        eyebrow="SEE OUR WORK" 
        title="Proof is in the Performance" 
        center={true} 
      />
      
      <div className="flex flex-col gap-16 mt-16 mb-12">
        {categories.map((category) => {
          const categoryItems = portfolioData.filter(item => item.type === category);
          if (categoryItems.length === 0) return null;

          return (
            <div key={category} className="flex flex-col">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="font-display font-bold text-2xl text-brand-light">
                  {category} Success Stories
                </h3>
                <Link to="/portfolio" className="text-brand-pink text-sm font-bold uppercase tracking-wider hover:text-brand-light transition-colors flex items-center gap-2 group">
                  See All {category} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryItems.slice(0, 2).map((item) => {
                  const colorClasses = {
                    blue: {
                      gradient: "from-brand-blue/40 to-brand-blue/5",
                      badgeBg: "bg-brand-blue/90",
                      shadow: "group-hover:shadow-glow-blue",
                      hoverText: "text-brand-blue"
                    },
                    pink: {
                      gradient: "from-brand-pink/40 to-brand-pink/5",
                      badgeBg: "bg-brand-pink/90",
                      shadow: "group-hover:shadow-glow-pink",
                      hoverText: "text-brand-pink"
                    },
                    lime: {
                      gradient: "from-brand-lime/40 to-brand-lime/5",
                      badgeBg: "bg-brand-lime/90",
                      shadow: "group-hover:shadow-glow-lime",
                      hoverText: "text-brand-lime"
                    },
                    gold: {
                      gradient: "from-brand-gold/40 to-brand-gold/5",
                      badgeBg: "bg-brand-gold/90",
                      shadow: "group-hover:shadow-glow-gold",
                      hoverText: "text-brand-gold"
                    },
                    purple: {
                      gradient: "from-purple-500/40 to-purple-500/5",
                      badgeBg: "bg-purple-600/90",
                      shadow: "group-hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]",
                      hoverText: "text-purple-400"
                    }
                  };
                  
                  const theme = colorClasses[item.color] || colorClasses.blue;

                  return (
                    <div 
                      key={item.id} 
                      className="bg-brand-slate rounded-3xl overflow-hidden group cursor-pointer border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 flex flex-col"
                    >
                      {/* Top Gradient Placeholder */}
                      <div className={`relative w-full h-48 bg-gradient-to-br ${theme.gradient} overflow-hidden flex items-center justify-center p-6`}>
                        <div className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                           <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md"></div>
                        </div>
                        
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
                        <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        <div className={`mt-auto flex items-center gap-2 font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${theme.hoverText}`}>
                          View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <GlowButton variant="filled" color="pink" href="/portfolio">
          VIEW ALL CASE STUDIES →
        </GlowButton>
      </div>
    </section>
  );
}
