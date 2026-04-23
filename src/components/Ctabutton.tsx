import Link from "next/link";

interface CTAButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text = "Let's Start Building",
  href,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer bg-[#F05A24]";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        <span className="relative z-10">{text}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default CTAButton;
