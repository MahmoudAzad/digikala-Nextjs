import Image from "next/image";
import SinglePro_iconsTooltip from "@/components/tooltip/singlePro_iconsTooltip";
import { IProduct } from "@/types/product";
interface Props {
  singleProData: IProduct;
}
const ProductImages: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="flex flex-col basis-1/3">
      <div className="flex items-start">
        <div className="flex-col space-y-5 mt-20 gap-y-4 text-2xl text-gray-600">
          <SinglePro_iconsTooltip product={singleProData} />
        </div>
        {singleProData.productImage &&
          singleProData.productImage.length > 0 && (
            <Image
              src={singleProData.productImage[0].image}
              width={500}
              height={500}
              alt="دیجیکالا"
            />
          )}
      </div>
      <div className="flex justify-center">
        {singleProData.productImage?.map((image, index) => (
          <Image
            key={index}
            alt="دیجیکالا"
            src={image.image}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
