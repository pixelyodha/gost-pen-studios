export default function Marquee() {
  const brands = [
    "VISTARA TECH", "GLOW LABS", "FUNDIFY", "CRAFTBOX", 
    "PIXELARA", "ZENBRAND", "RANKFLO", "NOVARETAIL"
  ];

  return (
    <div className="w-full overflow-hidden bg-brand-dark py-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-brand-muted text-xs tracking-widest font-semibold text-center uppercase">
          Trusted By Ambitious Brands:
        </p>
      </div>
      <div className="flex whitespace-nowrap relative overflow-hidden group">
        <div className="flex animate-marquee group-hover:pause">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-brand-light/40 font-display font-bold text-xl md:text-2xl tracking-widest uppercase">
                {brand}
              </span>
              <span className="text-brand-pink/30 text-xs">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
