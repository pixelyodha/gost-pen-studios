import { Link } from 'react-router-dom';

export default function GlowButton({ children, variant = 'filled', color = 'pink', className = '', href, ...props }) {
  const baseClasses = "rounded-full px-8 py-4 font-display font-bold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    filled: {
      pink: "bg-brand-pink text-white hover:shadow-glow-pink",
      blue: "bg-brand-blue text-white hover:shadow-glow-blue",
      lime: "bg-brand-lime text-brand-dark hover:shadow-glow-lime",
    },
    outline: {
      pink: "border border-brand-pink text-brand-pink hover:bg-brand-pink/10",
      blue: "border border-brand-blue text-brand-blue hover:bg-brand-blue/10",
      lime: "border border-brand-lime text-brand-lime hover:bg-brand-lime/10 hover:shadow-glow-lime",
    }
  };

  const selectedClass = variants[variant][color];

  if (href) {
    return (
      <Link to={href} className={`${baseClasses} ${selectedClass} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${selectedClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
