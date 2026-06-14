import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: '',
    budget: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', company: '', service: '', budget: '', description: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-20">

      {/* 1. Hero Section */}
      <section className="min-h-[35vh] flex items-center relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-dark-mesh opacity-50"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16">
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              <span className="text-brand-light block">LET'S BUILD SOMETHING</span>
              <span className="bg-gradient-blue-pink bg-clip-text text-transparent">AMAZING</span>{' '}
              <span className="text-brand-lime">TOGETHER.</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
              Response time: under 4 hours on weekdays ⚡
            </p>
          </div>
        </div>
      </section>

      {/* 2. Two-Column Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 -mt-12 lg:-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT - Contact Info */}
          <div className="bg-brand-slate rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl flex flex-col h-full relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] group-hover:bg-brand-blue/10 transition-colors duration-700 pointer-events-none"></div>

            <h2 className="font-display font-bold text-2xl text-brand-light mb-8 relative z-10">Quick Channels</h2>

            <div className="flex flex-col gap-4 mb-10 relative z-10">
              <a href="#" className="bg-[#25D366] text-white rounded-xl px-6 py-4 flex items-center justify-between font-display font-bold text-lg hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] transition-all">
                <span className="flex items-center gap-3">
                  <MessageCircle size={24} /> Chat on WhatsApp
                </span>
                <span>→</span>
              </a>

              <a href="mailto:hello@ghostpenstudio.com" className="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue rounded-xl px-6 py-4 flex items-center justify-between font-display font-bold text-lg hover:-translate-y-1 hover:bg-brand-blue/20 transition-all">
                <span className="flex items-center gap-3">
                  <Mail size={24} /> Email Us
                </span>
                <span>→</span>
              </a>
            </div>

            <div className="flex gap-4 mb-10 relative z-10">
              <a href="#" className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-brand-pink border border-white/5 hover:border-brand-pink hover:shadow-glow-pink transition-all">
                <InstagramIcon />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-brand-blue border border-white/5 hover:border-brand-blue hover:shadow-glow-blue transition-all">
                <LinkedinIcon />
              </a>
            </div>

            <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/5 relative z-10">
              <div className="flex items-start gap-4 text-brand-muted">
                <MapPin className="text-brand-pink shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  <strong className="text-brand-light block mb-1">Registered Office:</strong>
                  Flat - 1472, Kaveri Tower<br />
                  Mahagunpuram, Ghaziabad - 201009
                </p>
              </div>

              <div className="flex items-start gap-4 text-brand-muted">
                <Clock className="text-brand-lime shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  <strong className="text-brand-light block mb-1">Business Hours:</strong>
                  Mon–Sat, 10 AM – 7 PM IST
                </p>
              </div>

              <div className="bg-brand-dark/50 border border-white/5 rounded-xl p-4 flex items-center gap-3 text-sm mt-4">
                <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shrink-0"></div>
                <span className="text-brand-light font-medium">We reply within 4 hours — guaranteed.</span>
              </div>
            </div>
          </div>

          {/* RIGHT - RFQ Form */}
          <div className="bg-brand-slate rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-lime/5 rounded-full blur-[80px] pointer-events-none"></div>

            <h2 className="font-display font-bold text-2xl text-brand-light mb-8 relative z-10">Request for Quote</h2>

            {isSuccess ? (
              <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-[400px] relative z-10 animate-fade-in">
                <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center text-brand-lime mb-4">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-light mb-2">🎉 Received!</h3>
                <p className="text-brand-muted">We'll be in touch within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-brand-light placeholder:text-brand-muted/50 focus:border-brand-blue focus:outline-none focus:shadow-glow-blue transition-all w-full text-sm font-medium"
                  />
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-brand-light placeholder:text-brand-muted/50 focus:border-brand-blue focus:outline-none focus:shadow-glow-blue transition-all w-full text-sm font-medium"
                  />
                </div>

                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-brand-light focus:border-brand-blue focus:outline-none focus:shadow-glow-blue transition-all w-full text-sm font-medium appearance-none"
                >
                  <option value="" disabled className="text-brand-muted/50">Service Needed</option>
                  <option value="Social Media Bootcamp">Social Media Bootcamp</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Multimedia Production">Multimedia Production</option>
                  <option value="SMM">Social Media Management (SMM)</option>
                  <option value="Web & SEO">Web & SEO</option>
                  <option value="Not Sure / Full Package">Not Sure / Full Package</option>
                </select>

                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-brand-light focus:border-brand-blue focus:outline-none focus:shadow-glow-blue transition-all w-full text-sm font-medium appearance-none"
                >
                  <option value="" disabled className="text-brand-muted/50">Budget Range</option>
                  <option value="Under ₹25K">Under ₹25K</option>
                  <option value="₹25K–₹75K">₹25K–₹75K</option>
                  <option value="₹75K–₹2L">₹75K–₹2L</option>
                  <option value="₹2L+">₹2L+</option>
                  <option value="Let's discuss">Let's discuss</option>
                </select>

                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Project Description"
                  rows="4"
                  className="bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-brand-light placeholder:text-brand-muted/50 focus:border-brand-blue focus:outline-none focus:shadow-glow-blue transition-all w-full text-sm font-medium resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-lime text-brand-dark font-display font-bold text-lg py-4 rounded-xl hover:shadow-glow-lime hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0 mt-2 flex items-center justify-center gap-2 tracking-wide"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
                      SENDING...
                    </span>
                  ) : (
                    "GET MY QUOTE →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. FAQ Strip */}
      <section className="py-16 border-t border-white/5 bg-brand-slate/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-brand-dark border border-white/5 rounded-2xl p-6 hover:border-brand-pink/30 transition-colors">
              <h4 className="font-bold text-brand-light text-lg mb-2 flex items-center gap-2">
                <span className="text-brand-pink">Q.</span> How fast do you start?
              </h4>
              <p className="text-brand-muted text-sm">Within 7 days of agreement.</p>
            </div>

            <div className="bg-brand-dark border border-white/5 rounded-2xl p-6 hover:border-brand-blue/30 transition-colors">
              <h4 className="font-bold text-brand-light text-lg mb-2 flex items-center gap-2">
                <span className="text-brand-blue">Q.</span> Do you sign NDAs?
              </h4>
              <p className="text-brand-muted text-sm">Absolutely, on request.</p>
            </div>

            <div className="bg-brand-dark border border-white/5 rounded-2xl p-6 hover:border-brand-lime/30 transition-colors">
              <h4 className="font-bold text-brand-light text-lg mb-2 flex items-center gap-2">
                <span className="text-brand-lime">Q.</span> Do you offer EMI?
              </h4>
              <p className="text-brand-muted text-sm">Yes, for 3+ month packages.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
