export default function TestimonialCard({ quote, name, title }) {
  return (
    <div className="bg-brand-slate border border-white/5 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
      <div className="flex text-brand-gold text-lg tracking-widest">
        {"★★★★★".split('').map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
      <p className="font-accent text-brand-light text-lg italic leading-relaxed flex-grow">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-display font-bold text-white text-sm shrink-0">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="text-brand-light text-sm font-bold">{name}</p>
          <p className="text-brand-muted text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
}
