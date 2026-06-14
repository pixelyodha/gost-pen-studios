import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Users, TrendingUp, Clapperboard, GraduationCap, ChevronDown, CheckCircle2, Search, PenTool, Radio, BarChart3, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import FinalCTA from '../components/ui/FinalCTA';
import ProcessTimeline from '../components/ui/ProcessTimeline';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const services = [
    {
      id: "content-strategy",
      name: "Content Strategy",
      colorName: "blue",
      colorClass: "brand-blue",
      icon: Compass,
      price: "Starting from ₹25,000/mo",
      description: "Data-backed roadmaps that position your brand as an industry authority. We don't just post; we create a narrative arc for your brand.",
      features: [
        "Audience Research",
        "Content Calendar",
        "ROI Tracking",
        "Brand Voice Guide"
      ]
    },
    {
      id: "social-media",
      name: "Social Media Management",
      colorName: "pink",
      colorClass: "brand-pink",
      icon: Users,
      price: "Starting from ₹35,000/mo",
      description: "Community-first social presence that drives real engagement, not just likes. We turn followers into brand advocates.",
      features: [
        "LinkedIn Ghostwriting",
        "Instagram Reels",
        "Community Management",
        "Analytics"
      ]
    },
    {
      id: "website-seo",
      name: "Website & SEO",
      colorName: "lime",
      colorClass: "brand-lime",
      icon: TrendingUp,
      price: "Starting from ₹40,000/mo",
      description: "High-converting funnels and search-optimized copy that prints money. Your 24/7 salesperson.",
      features: [
        "Technical Audit",
        "On-Page SEO",
        "Local SEO",
        "CRO (Conversion Rate Optimisation)"
      ]
    },
    {
      id: "multimedia",
      name: "Multimedia Production",
      colorName: "purple",
      colorClass: "purple-500",
      icon: Clapperboard,
      price: "Custom Quote",
      description: "Scroll-stopping reels, podcasts, and video assets that capture attention in a fraction of a second.",
      features: [
        "Brand Video",
        "Motion Graphics",
        "Podcast Setup",
        "Visual Identity Kit"
      ]
    },
    {
      id: "bootcamp",
      name: "Social Media Bootcamp",
      colorName: "gold",
      colorClass: "brand-gold",
      icon: GraduationCap,
      price: "₹8,500/session",
      description: "Train your in-house team with our battle-tested frameworks to bring the agency capability inside.",
      features: [
        "8-Hour Live Training",
        "Strategy Workbook",
        "Q&A Session",
        "30-Day Support"
      ]
    }
  ];

  const faqs = [
    { q: "Do you work with early-stage startups?", a: "Absolutely. We love partnering with founders who have a bold vision and are ready to disrupt their industry, regardless of their current size." },
    { q: "What's your minimum engagement period?", a: "We typically require a 3-month minimum commitment. True brand building and measurable SEO/Social ROI takes time to compound." },
    { q: "Do you offer performance guarantees?", a: "While we can't guarantee arbitrary numbers due to platform algorithm volatility, we do guarantee execution velocity, content quality, and completely transparent KPI reporting." },
    { q: "Can I see results within the first month?", a: "You will see an immediate improvement in brand aesthetic, content quality, and engagement rates. Hard conversion metrics usually scale from month two onwards." },
    { q: "Do you work with regional language content?", a: "Yes, we have specialists who can localize your brand narrative into major Indian regional languages to capture Tier 2/3 markets effectively." },
    { q: "How do we get started?", a: "Click any 'Get Quote' button or message us on WhatsApp. We'll schedule a 30-minute discovery call to see if we're a mutual fit." }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Subtle dotted grid using radial gradients */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0EA5E9 1px, transparent 0)', backgroundSize: '40px 40px' }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="border border-brand-blue text-brand-blue rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6 bg-brand-blue/5">
            WHAT WE OFFER
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-brand-light mb-4 leading-tight">
            OUR STORYTELLING SOLUTIONS
          </h1>
          <p className="font-accent italic text-brand-muted text-xl md:text-2xl mb-10">
            Strategic brilliance. Creative execution.
          </p>
          
          <div className="flex gap-4 items-center">
            <div className="w-3 h-3 rounded-full bg-brand-blue shadow-glow-blue animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-brand-pink shadow-glow-pink animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-brand-lime shadow-glow-lime animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_3px_rgba(168,85,247,0.5)] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-3 h-3 rounded-full bg-brand-gold shadow-glow-gold animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = service.icon;
            
            return (
              <div id={service.id} key={service.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-brand-slate/30 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-colors`}>
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-${service.colorClass}/10 text-${service.colorClass} mb-2 shadow-[0_0_20px_0_rgba(0,0,0,0.2)]`}>
                    <Icon size={32} />
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-light">
                    {service.name}
                  </h3>
                  
                  <p className="text-brand-muted text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="flex flex-col gap-4 mt-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-brand-light font-medium">
                        <ArrowRight size={18} className={`text-${service.colorClass}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6 pt-6 border-t border-white/5">
                    <div className="bg-brand-dark border border-white/10 rounded-lg px-4 py-2">
                      <span className="text-brand-muted text-xs block mb-1 uppercase tracking-wider">Investment</span>
                      <span className="text-brand-light font-bold font-display">{service.price}</span>
                    </div>
                    
                    <Link to="/contact" className={`text-${service.colorClass} font-bold flex items-center gap-2 hover:gap-3 transition-all ml-auto sm:ml-0 group`}>
                      Get Quote for This <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                {/* Visual Placeholder Content */}
                <div className="w-full lg:w-1/2 h-full min-h-[300px] md:min-h-[400px] rounded-2xl bg-brand-dark/50 border border-white/5 relative overflow-hidden flex items-center justify-center group">
                   <div className={`absolute inset-0 bg-${service.colorClass}/5 group-hover:bg-${service.colorClass}/10 transition-colors duration-500`}></div>
                   <div className={`w-64 h-64 rounded-full bg-${service.colorClass}/20 blur-[80px] absolute`}></div>
                   <Icon size={80} className={`text-${service.colorClass}/30 relative z-10 group-hover:scale-110 transition-transform duration-700`} />
                </div>
                
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Process Timeline */}
      <ProcessTimeline />

      {/* 4. FAQ Accordion */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading 
          eyebrow="COMMON QUESTIONS" 
          title="Got Questions? We've Got Answers." 
          center={true} 
        />
        
        <div className="mt-16 flex flex-col">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 last:border-b-0">
              <button 
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <span className="font-display font-semibold text-lg md:text-xl text-brand-light pr-8">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-brand-pink transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-brand-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Final CTA Banner */}
      <FinalCTA />
    </div>
  );
}
