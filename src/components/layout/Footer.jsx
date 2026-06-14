import { PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1A19.5 19.5 0 0 1 12 6c3.5 0 7.3.3 9.5 1.1a2.8 2.8 0 0 1 2 2A28 28 0 0 1 24 12a28 28 0 0 1-.5 2.9 2.8 2.8 0 0 1-2 2C19.3 17.7 15.5 18 12 18s-7.3-.3-9.5-1.1a2.8 2.8 0 0 1-2-2A28 28 0 0 1 0 12a28 28 0 0 1 .5-2.9 2.8 2.8 0 0 1 2-2z"/><path d="m10 15 5-3-5-3v6z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-white/5 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <PenTool className="text-brand-pink" />
              <span className="font-display font-bold text-xl text-brand-light">
                GhostPenStudio
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed pr-4">
              A creative studio where content strategy meets emotional connection — built for brands that refuse to be ignored.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-brand-light hover:text-brand-pink hover:bg-brand-pink/10 transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-brand-light hover:text-brand-blue hover:bg-brand-blue/10 transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-brand-light hover:text-red-500 hover:bg-red-500/10 transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-bold text-brand-light mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-blue transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-brand-blue transition-colors">The Ghost Notes</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-bold text-brand-light mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><Link to="/services" state={{ scrollTo: 'bootcamp' }} className="hover:text-brand-blue transition-colors">Social Media Bootcamp</Link></li>
              <li><Link to="/services" state={{ scrollTo: 'content-strategy' }} className="hover:text-brand-blue transition-colors">Content Creation</Link></li>
              <li><Link to="/services" state={{ scrollTo: 'multimedia' }} className="hover:text-brand-blue transition-colors">Multimedia</Link></li>
              <li><Link to="/services" state={{ scrollTo: 'social-media' }} className="hover:text-brand-blue transition-colors">SMM</Link></li>
              <li><Link to="/services" state={{ scrollTo: 'website-seo' }} className="hover:text-brand-blue transition-colors">Web & SEO</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display font-bold text-brand-light mb-6">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li>hello@ghostpenstudio.com</li>
              <li>+91 98765 43210</li>
              <li className="mt-4">
                <Link to="/contact" className="inline-block bg-brand-slate border border-white/10 text-brand-light px-6 py-2 rounded-full text-sm hover:border-brand-pink transition-colors">
                  Get a Proposal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted">
          <p>© 2024 GhostPenStudio. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <PenTool size={12} className="text-brand-pink" /> in India</p>
        </div>
      </div>
    </footer>
  );
}
