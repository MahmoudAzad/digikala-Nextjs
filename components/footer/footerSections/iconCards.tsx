import Image from "next/image";
import { IGallery } from "@/types/category";

interface Props {
  footerIcons: IGallery[];
}
const IconCards: React.FC<Props> = ({ footerIcons }) => {
  return (
    <div className="hidden lg:flex justify-around items-center mt-10 flex-wrap">
      {footerIcons?.map((icon, index) => (
        <div
          className="flex flex-col justify-center items-center  gap-y-1"
          key={index}
        >
          <Image src={icon.image} alt={icon.name} width={50} height={50} />
          <p className="text-xs">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconCards;
