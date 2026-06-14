import { Link } from 'react-router-dom';

export default function ServiceCard({ icon: Icon, title, description, colorName, to, state }) {
  const colorMap = {
    blue: {
      bg: "bg-brand-blue/10",
      text: "text-brand-blue",
      hover: "hover:border-brand-blue/50 hover:shadow-glow-blue"
    },
    pink: {
      bg: "bg-brand-pink/10",
      text: "text-brand-pink",
      hover: "hover:border-brand-pink/50 hover:shadow-glow-pink"
    },
    lime: {
      bg: "bg-brand-lime/10",
      text: "text-brand-lime",
      hover: "hover:border-brand-lime/50 hover:shadow-glow-lime"
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      hover: "hover:border-purple-500/50 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]"
    },
    gold: {
      bg: "bg-brand-gold/10",
      text: "text-brand-gold",
      hover: "hover:border-brand-gold/50 hover:shadow-glow-gold"
    }
  };

  const style = colorMap[colorName] || colorMap.blue;
  
  const content = (
    <>
      <div className={`${style.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={style.text} size={28} />
      </div>
      <h3 className="font-display font-bold text-xl text-brand-light mb-3">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed flex-grow">{description}</p>
      <div className={`mt-6 font-bold flex items-center gap-2 text-sm ${style.text} opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all`}>
        Explore <span className="text-lg">→</span>
      </div>
    </>
  );

  const className = `bg-brand-slate border border-white/5 rounded-2xl p-6 transition-all duration-300 group cursor-pointer flex flex-col h-full ${style.hover}`;

  if (to) {
    return <Link to={to} state={state} className={className}>{content}</Link>;
  }

  return <div className={className}>{content}</div>;
}
