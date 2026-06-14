import { Link } from 'react-router-dom';
import { Compass, Users, TrendingUp, Clapperboard, GraduationCap, TrendingUp as TrendingUpIcon, MessageCircle } from 'lucide-react';
import GlowButton from '../components/ui/GlowButton';
import SectionHeading from '../components/ui/SectionHeading';
import StatBadge from '../components/ui/StatBadge';
import Marquee from '../components/ui/Marquee';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import BlogCard from '../components/ui/BlogCard';
import FinalCTA from '../components/ui/FinalCTA';
import { blogData } from '../data/blog';

export default function HomePage() {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark-mesh"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-light leading-tight tracking-tight mb-4 uppercase">
            We Script Your <br />
            <span className="bg-gradient-blue-pink bg-clip-text text-transparent">Success Story.</span>
          </h1>
          
          <p className="font-body text-brand-muted text-lg md:text-xl max-w-[600px] mx-auto mb-10 leading-relaxed">
            A creative studio where content strategy meets emotional connection — built for brands that refuse to be ignored.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <GlowButton variant="filled" color="pink" href="/contact">
              LET'S TALK
            </GlowButton>
            <GlowButton variant="outline" color="blue">
              SEE OUR WORK
            </GlowButton>
          </div>
          
          {/* Hero Visual: Animated Ghost Pen */}
          <div className="relative mx-auto w-32 h-32 animate-float">
            <div className="absolute inset-0 rounded-full border border-brand-pink/30 animate-pulse-slow scale-150"></div>
            <div className="absolute inset-0 rounded-full border border-brand-blue/20 animate-pulse-slow scale-110" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 rounded-full border border-brand-lime/20 animate-pulse-slow scale-[85%]" style={{ animationDelay: '2s' }}></div>
            
            <svg viewBox="0 0 24 24" className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path className="stroke-brand-blue" d="M12 2L15 8L12 22L9 8L12 2Z" />
              <path className="stroke-brand-pink" d="M12 22V24" strokeWidth="3" strokeLinecap="round" />
            </svg>
            
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-brand-pink to-transparent opacity-70"></div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip */}
      <section className="bg-brand-slate border-t border-white/5 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <StatBadge metric="50+" label="Brands Served" />
            <StatBadge metric="3.2x" label="Average ROI" />
            <StatBadge metric="₹0" label="Wasted Budget Policy" />
            <StatBadge metric="100%" label="Remote, Always On" />
          </div>
        </div>
      </section>

      {/* 4. Trust Marquee */}
      <Marquee />

      {/* 5. Services Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="WHAT WE DO" 
          title="Storytelling Solutions That Convert" 
          center={true} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-12">
          <ServiceCard 
            icon={Compass} 
            title="Content Strategy" 
            description="Data-backed roadmaps that position your brand as an industry authority." 
            colorName="blue" 
            to="/services"
            state={{ scrollTo: 'content-strategy' }}
          />
          <ServiceCard 
            icon={Users} 
            title="Social Media Management" 
            description="Community-first social presence that drives real engagement, not just likes." 
            colorName="pink" 
            to="/services"
            state={{ scrollTo: 'social-media' }}
          />
          <ServiceCard 
            icon={TrendingUp} 
            title="Website & SEO" 
            description="High-converting funnels and search-optimized copy that prints money." 
            colorName="lime" 
            to="/services"
            state={{ scrollTo: 'website-seo' }}
          />
          <ServiceCard 
            icon={Clapperboard} 
            title="Multimedia Production" 
            description="Scroll-stopping reels, podcasts, and video assets that capture attention." 
            colorName="purple" 
            to="/services"
            state={{ scrollTo: 'multimedia' }}
          />
          <ServiceCard 
            icon={GraduationCap} 
            title="Social Media Bootcamp" 
            description="Train your in-house team with our battle-tested frameworks." 
            colorName="gold" 
            to="/services"
            state={{ scrollTo: 'bootcamp' }}
          />
          {/* Custom CTA Card */}
          <div className="bg-brand-slate/50 border border-brand-blue/20 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full hover:bg-brand-slate transition-colors cursor-pointer group">
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUpIcon size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-light mb-2">Custom Requirement?</h3>
            <p className="text-brand-muted text-sm">Let's build a bespoke strategy for your specific goals.</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <GlowButton variant="outline" color="lime" href="/services">
            EXPLORE ALL SERVICES →
          </GlowButton>
        </div>
      </section>

      {/* 6. Why GhostPen */}
      <section className="py-24 bg-brand-slate/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              eyebrow="WHY GHOSTPENSTUDIO" 
              title="We Don't Just Post. We Build Presence." 
            />
            
            <div className="flex flex-col gap-8 mt-12">
              <div className="pl-6 border-l-2 border-brand-blue flex flex-col gap-1">
                <h4 className="font-bold text-brand-light text-lg">Audience Research-First Approach</h4>
                <p className="text-brand-muted text-sm">We don't guess. We analyze your market and build content pillars that resonate deeply.</p>
              </div>
              <div className="pl-6 border-l-2 border-brand-pink flex flex-col gap-1">
                <h4 className="font-bold text-brand-light text-lg">Emotionally-Driven Storytelling</h4>
                <p className="text-brand-muted text-sm">Logic tells, but emotion sells. We inject personality into every piece of content.</p>
              </div>
              <div className="pl-6 border-l-2 border-brand-lime flex flex-col gap-1">
                <h4 className="font-bold text-brand-light text-lg">Data-Backed Performance Tracking</h4>
                <p className="text-brand-muted text-sm">Every campaign is measured against hard metrics like CAC, LTV, and conversion rate.</p>
              </div>
              <div className="pl-6 border-l-2 border-brand-gold flex flex-col gap-1">
                <h4 className="font-bold text-brand-light text-lg">Transparent, Collaborative Process</h4>
                <p className="text-brand-muted text-sm">No black boxes. You'll always know exactly what we're doing and why we're doing it.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] flex items-center justify-center perspective-1000 mt-10 lg:mt-0">
            {/* Card Stack Decor */}
            <div className="absolute w-[300px] h-[350px] bg-brand-dark border border-brand-blue/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(14,165,233,0.15)] transform -rotate-6 -translate-x-12 translate-y-8 backdrop-blur-xl z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-slate"></div>
                <div className="flex flex-col gap-1">
                  <div className="w-24 h-2 bg-brand-slate rounded-full"></div>
                  <div className="w-16 h-2 bg-brand-slate rounded-full"></div>
                </div>
              </div>
              <div className="flex-grow bg-brand-slate/50 rounded-xl overflow-hidden relative border border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/20 to-transparent"></div>
              </div>
              <div className="w-full h-3 bg-brand-slate/50 rounded-full mt-2"></div>
            </div>

            <div className="absolute w-[300px] h-[350px] bg-brand-slate border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 translate-x-12 -translate-y-4 backdrop-blur-xl z-20 flex flex-col">
              <h4 className="text-xs font-bold text-brand-muted tracking-widest uppercase mb-4">Engagement Spike</h4>
              <div className="flex-grow flex items-end">
                <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-glow-lime" preserveAspectRatio="none">
                  <path d="M0 45 Q 10 40, 20 42 T 40 30 T 60 15 T 80 5 T 100 0" fill="none" className="stroke-brand-lime" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0 45 Q 10 40, 20 42 T 40 30 T 60 15 T 80 5 T 100 0 L 100 50 L 0 50 Z" fill="url(#limeGrad)" />
                  <defs>
                    <linearGradient id="limeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#84CC16" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#84CC16" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="absolute w-[260px] h-[160px] bg-gradient-brand rounded-2xl p-6 shadow-glow-pink transform -rotate-3 translate-y-32 z-30 flex flex-col justify-center">
              <span className="text-white/80 text-sm font-bold uppercase tracking-wider mb-1">Lead Increase</span>
              <span className="text-white font-display font-extrabold text-5xl">140%</span>
              <div className="flex items-center gap-1 mt-2 text-white/90 text-xs">
                <TrendingUpIcon size={14} /> Compared to last quarter
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="CLIENT LOVE" 
          title="Brands That Grew With Us" 
          center={true} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <TestimonialCard 
            quote="GhostPen transformed our chaotic posting schedule into a predictable lead-gen machine. The ROI in the first quarter alone was absurd."
            name="Rahul Sharma"
            title="Founder, Vistara Tech"
          />
          <TestimonialCard 
            quote="Their storytelling approach helped us break through the noise. Our LinkedIn following grew by 300% and we started closing enterprise deals."
            name="Priya Desai"
            title="CMO, ZenBrand"
          />
          <TestimonialCard 
            quote="Finally, an agency that understands the Indian D2C space. They don't just create pretty graphics; they create content that actually converts."
            name="Vikram Singh"
            title="Director, Glow Labs"
          />
        </div>
      </section>

      {/* 8. Blog Teaser */}
      <section className="py-24 bg-brand-slate/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="THE GHOST NOTES" 
            title="Insights That Move Brands" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            {blogData.slice(0, 3).map((blog) => (
              <BlogCard 
                key={blog.id}
                title={blog.title}
                category={blog.category}
                color={blog.color}
                icon={blog.icon}
                excerpt={blog.excerpt}
                author={blog.author}
                readTime={blog.readTime}
              />
            ))}
          </div>

          <div className="flex justify-center">
             <Link to="/blog" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
               READ ALL ARTICLES <TrendingUpIcon size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <FinalCTA />
    </div>
  );
}
