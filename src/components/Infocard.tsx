interface InfoCardProps {
  title?: string;
  body?: string;
  accentColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title = "Mission",
  body = "To empower businesses and content creators with world-class VAS infrastructure and support, enabling them to deliver valuable digital services to Nigerian mobile subscribers at scale.",
  accentColor = "#F05A24",
}) => {
  return (
    <div
      className="relative w-full max-w-sm p-8 rounded-xl overflow-hidden"
      style={{ backgroundColor: "#fce8e8" }}
    >
      {/* Vertical stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(255,255,255,0.5) 0px,
            rgba(255,255,255,0.5) 30px,
            transparent 30px,
            transparent 60px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: accentColor === "#F05A24" ? "#1a1a1a" : accentColor }}
        >
          {title}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
};

export default InfoCard;