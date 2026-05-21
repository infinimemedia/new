interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="block w-8 h-px bg-[#C4A35A]" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C4A35A]">
        {children}
      </span>
    </div>
  );
}
