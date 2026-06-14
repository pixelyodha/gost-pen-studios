import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, PenTool } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1A19.5 19.5 0 0 1 12 6c3.5 0 7.3.3 9.5 1.1a2.8 2.8 0 0 1 2 2A28 28 0 0 1 24 12a28 28 0 0 1-.5 2.9 2.8 2.8 0 0 1-2 2C19.3 17.7 15.5 18 12 18s-7.3-.3-9.5-1.1a2.8 2.8 0 0 1-2-2A28 28 0 0 1 0 12a28 28 0 0 1 .5-2.9 2.8 2.8 0 0 1 2-2z"/><path d="m10 15 5-3-5-3v6z"/></svg>
);
import { blogData } from '../data/blog';
import BlogCard from '../components/ui/BlogCard';

export default function BlogPage() {
  return (
    <div className="bg-brand-dark min-h-screen pt-20">
      
      {/* 1. Featured Article Banner */}
      <section className="relative w-full border-b border-white/5 bg-gradient-to-br from-brand-slate to-brand-dark overflow-hidden min-h-[50vh] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-dark-mesh opacity-30"></div>
        <div className="absolute -left-[20%] top-0 w-1/2 h-full bg-brand-pink/5 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6">
              <div className="bg-brand-pink/20 text-brand-pink rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase border border-brand-pink/20">
                AI + Marketing
              </div>
              
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-light leading-tight">
                The AI-Powered Marketer: How GhostPenStudio Uses Technology to Write Better Than Humans
              </h2>
              
              <div className="flex items-center gap-4 text-brand-muted text-sm font-medium border-l-2 border-brand-pink pl-4 mt-2">
                <span>By Siddharth Rao</span>
                <span className="w-1 h-1 rounded-full bg-brand-muted"></span>
                <span>Oct 24, 2024</span>
              </div>
              
              <Link to="/blog" className="mt-4 text-brand-pink font-bold flex items-center gap-2 group tracking-wide">
                READ NOW <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            {/* Right Illustration */}
            <div className="hidden lg:flex justify-center items-center relative h-full min-h-[300px]">
              <div className="relative flex items-center justify-center group cursor-pointer">
                {/* Glowing Aura */}
                <div className="absolute inset-0 bg-gradient-blue-pink rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                
                {/* SVG Illustration Container */}
                <div className="relative z-10 text-white flex flex-col items-center">
                  <BrainCircuit size={160} strokeWidth={1} className="text-brand-pink filter drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
                  <PenTool size={60} strokeWidth={1.5} className="absolute -bottom-8 -right-8 text-brand-blue filter drop-shadow-[0_0_15px_rgba(14,165,233,0.8)] bg-brand-dark rounded-full p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          
          {/* 2. Blog Grid */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-display font-bold text-2xl text-brand-light">Latest Notes</h2>
              <span className="text-brand-muted text-sm font-medium">Showing 6 articles</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {blogData.map((blog) => (
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
            
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <button className="bg-brand-slate border border-white/10 text-brand-light font-bold px-8 py-3 rounded-full hover:bg-white/5 transition-colors">
                LOAD MORE
              </button>
            </div>
          </div>

          {/* 3. Sidebar (Sticky on Desktop) */}
          <div className="hidden lg:flex flex-col gap-10 relative">
            <div className="sticky top-28 flex flex-col gap-10">
              
              {/* Newsletter Signup */}
              <div className="bg-brand-slate rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl"></div>
                <h3 className="font-display font-bold text-xl text-brand-light mb-2 relative z-10">
                  Get Ghostly Good Marketing Tips
                </h3>
                <p className="text-brand-muted text-sm mb-6 relative z-10">
                  Zero fluff. Just actionable strategy delivered to your inbox every Friday.
                </p>
                <form className="flex flex-col gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-light focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-colors"
                  />
                  <button className="w-full bg-brand-pink text-white font-bold py-3 rounded-lg hover:shadow-glow-pink transition-all">
                    SUBSCRIBE
                  </button>
                </form>
              </div>

              {/* Top Topics */}
              <div>
                <h3 className="font-display font-bold text-lg text-brand-light mb-4 uppercase tracking-wider text-sm border-b border-white/5 pb-2">
                  Top Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Branding', 'SEO', 'Content', 'SMM', 'Growth', 'Video'].map((topic) => (
                    <Link key={topic} to="/blog" className="bg-brand-dark border border-white/5 text-brand-muted text-xs font-bold px-3 py-1.5 rounded-full hover:text-brand-pink hover:border-brand-pink transition-colors">
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="font-display font-bold text-lg text-brand-light mb-4 uppercase tracking-wider text-sm border-b border-white/5 pb-2">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-light hover:text-brand-pink hover:bg-brand-pink/10 transition-colors border border-white/5">
                    <InstagramIcon />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-light hover:text-brand-blue hover:bg-brand-blue/10 transition-colors border border-white/5">
                    <LinkedinIcon />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-light hover:text-red-500 hover:bg-red-500/10 transition-colors border border-white/5">
                    <YoutubeIcon />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
