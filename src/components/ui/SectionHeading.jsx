export default function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center text-center' : ''}`}>
      {eyebrow && (
        <span className="text-brand-blue text-xs tracking-widest font-bold uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-light leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gradient-brand rounded-full mt-2 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
