import { Search, PenTool, Radio, BarChart3 } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ProcessTimeline() {
  const processSteps = [
    { num: "01", icon: Search, title: "Research & Strategy", desc: "We audit, benchmark, and map your audience" },
    { num: "02", icon: PenTool, title: "Content Development", desc: "We craft narratives that stop the scroll" },
    { num: "03", icon: Radio, title: "Multi-Platform Integration", desc: "We amplify across every relevant channel" },
    { num: "04", icon: BarChart3, title: "Performance Analytics", desc: "We report, optimise, and scale what works" }
  ];

  return (
    <section className="py-24 bg-brand-slate/40 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          eyebrow="HOW IT WORKS" 
          title="Our 4-Step Growth Engine" 
          center={true} 
        />
        
        <div className="mt-20 relative">
          {/* Desktop connecting dashed line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-white/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-brand-dark border border-white/5 rounded-2xl p-8 relative flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-blue-pink text-white font-bold flex items-center justify-center shadow-glow-blue border-4 border-brand-dark">
                  {step.num}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-brand-slate flex items-center justify-center text-brand-light mb-6 mt-4">
                  <step.icon size={28} />
                </div>
                
                <h4 className="font-display font-bold text-xl text-brand-light mb-3">{step.title}</h4>
                <p className="text-brand-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
