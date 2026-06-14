import { MessageCircle } from 'lucide-react';
import GlowButton from './GlowButton';

export default function FinalCTA() {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-slate to-brand-dark"></div>
      <div className="absolute inset-0 bg-gradient-dark-mesh opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-light mb-6">
          Ready to Outgrow Your Competition?
        </h2>
        <p className="text-xl text-brand-muted mb-12">
          Let's build something extraordinary — together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <GlowButton variant="filled" color="pink">
            GET A FREE QUOTE
          </GlowButton>
          <GlowButton 
            variant="filled" 
            color="lime"
            className="!bg-[#25D366] !text-white hover:!shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle size={20} /> WHATSAPP US
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
