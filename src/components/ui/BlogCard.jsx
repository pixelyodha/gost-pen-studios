import { Link } from 'react-router-dom';

export default function BlogCard({ title, category, color = "blue", icon: Icon, excerpt, author, readTime }) {
  const colorStyles = {
    blue: {
      gradient: "from-brand-blue/30 to-brand-blue/5",
      text: "text-brand-blue",
      pillBg: "bg-brand-blue/10",
      borderHover: "hover:border-brand-blue/50"
    },
    pink: {
      gradient: "from-brand-pink/30 to-brand-pink/5",
      text: "text-brand-pink",
      pillBg: "bg-brand-pink/10",
      borderHover: "hover:border-brand-pink/50"
    },
    lime: {
      gradient: "from-brand-lime/30 to-brand-lime/5",
      text: "text-brand-lime",
      pillBg: "bg-brand-lime/10",
      borderHover: "hover:border-brand-lime/50"
    },
    gold: {
      gradient: "from-brand-gold/30 to-brand-gold/5",
      text: "text-brand-gold",
      pillBg: "bg-brand-gold/10",
      borderHover: "hover:border-brand-gold/50"
    }
  };

  const theme = colorStyles[color] || colorStyles.blue;
  const initials = author ? author.split(' ').map(n => n[0]).join('') : 'GP';

  return (
    <Link to="/blog" className={`flex flex-col bg-brand-slate rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-2 ${theme.borderHover} group h-full cursor-pointer shadow-lg`}>
      {/* Top Gradient Block */}
      <div className={`h-40 bg-gradient-to-br ${theme.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-dark-mesh opacity-20"></div>
        {Icon && (
          <div className="group-hover:scale-110 transition-transform duration-500 relative z-10">
            <Icon size={48} className={theme.text} strokeWidth={1.5} />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className={`${theme.pillBg} ${theme.text} px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase`}>
            {category}
          </span>
          <span className="text-xs text-brand-muted font-medium">
            {readTime || "5 min read"}
          </span>
        </div>
        
        <h3 className="font-display font-bold text-xl text-brand-light mb-3 line-clamp-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
          {excerpt || "Read our latest insights on digital marketing and content strategy."}
        </p>
        
        {/* Author Footer */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
          <div className="w-8 h-8 rounded-full bg-gradient-blue-pink flex items-center justify-center text-white text-xs font-bold shadow-md">
            {initials}
          </div>
          <span className="text-sm font-medium text-brand-light">
            {author || "GhostPen Team"}
          </span>
        </div>
      </div>
    </Link>
  );
}
