import Image from "next/image";

interface SocialIconProps {
  iconUrl: string;
  width?: number;
  height?: number;
  text: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  iconUrl,
  text,
  width = 36,
  height = 36,
}) => {
  return (
    <div>
      <Image src={iconUrl} width={width} height={height} alt={text} />
      <span className="visually-hidden">{text}</span>
    </div>
  );
};

export default SocialIcon;
