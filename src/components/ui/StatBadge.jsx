export default function StatBadge({ metric, label }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-brand-slate relative overflow-hidden group border-r border-white/5 last:border-r-0">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-brand opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <h4 className="text-4xl md:text-5xl font-display font-bold bg-gradient-brand bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform">
        {metric}
      </h4>
      <p className="text-brand-muted text-sm font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
