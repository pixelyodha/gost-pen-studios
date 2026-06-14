import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur shadow-lg' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="GhostPenStudio Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
            <Link to="/" className="text-brand-light hover:text-brand-blue transition-colors">Home</Link>
            <div className="relative group">
              <Link to="/services" className="flex items-center gap-1 text-brand-light hover:text-brand-blue transition-colors">
                Services <ChevronDown size={14} />
              </Link>
              <div className="absolute top-full left-0 mt-4 w-56 bg-brand-slate border border-white/5 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2 flex flex-col">
                  <Link to="/services" state={{ scrollTo: 'bootcamp' }} className="px-4 py-2 hover:bg-brand-blue/10 text-brand-light hover:text-brand-blue">Social Media Bootcamp</Link>
                  <Link to="/services" state={{ scrollTo: 'content-strategy' }} className="px-4 py-2 hover:bg-brand-blue/10 text-brand-light hover:text-brand-blue">Content Strategy</Link>
                  <Link to="/services" state={{ scrollTo: 'multimedia' }} className="px-4 py-2 hover:bg-brand-blue/10 text-brand-light hover:text-brand-blue">Multimedia</Link>
                  <Link to="/services" state={{ scrollTo: 'social-media' }} className="px-4 py-2 hover:bg-brand-blue/10 text-brand-light hover:text-brand-blue">SMM</Link>
                  <Link to="/services" state={{ scrollTo: 'website-seo' }} className="px-4 py-2 hover:bg-brand-blue/10 text-brand-light hover:text-brand-blue">Web/SEO</Link>
                </div>
              </div>
            </div>
            <Link to="/portfolio" className="text-brand-light hover:text-brand-blue transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-brand-light hover:text-brand-blue transition-colors">The Ghost Notes</Link>
            <Link to="/about" className="text-brand-light hover:text-brand-blue transition-colors">About</Link>
            <Link to="/contact" className="bg-brand-pink text-white px-6 py-2.5 rounded-full hover:shadow-glow-pink transition-all font-bold tracking-wide text-xs uppercase">
              Say Hello
            </Link>
          </div>

          <button className="md:hidden text-brand-light p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur border-t border-white/5 shadow-2xl pb-6">
          <div className="flex flex-col p-4 gap-4 font-body text-center text-lg">
            <Link to="/" className="text-brand-light py-2">Home</Link>
            <Link to="/services" className="text-brand-light py-2">Services</Link>
            <Link to="/portfolio" className="text-brand-light py-2">Case Studies</Link>
            <Link to="/blog" className="text-brand-light py-2">The Ghost Notes</Link>
            <Link to="/about" className="text-brand-light py-2">About</Link>
            <Link to="/contact" className="bg-brand-pink text-white mx-auto px-8 py-3 rounded-full mt-4 font-bold tracking-wide uppercase text-sm inline-block">Say Hello</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
