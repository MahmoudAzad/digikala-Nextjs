import { IGallery } from "@/types/category";
import Image from "next/image";

interface Props {
  footerBrands: IGallery[];
}
const Brands: React.FC<Props> = ({ footerBrands }) => {
  return (
    <>
      {footerBrands?.map((brand, index) => (
        <div key={index} className="py-5 place-self-center">
          <Image
            src={brand.image}
            alt="دیجی کالا"
            width={100}
            height={100}
            className="place-self-center"
          />
        </div>
      ))}
    </>
  );
};

export default Brands;
