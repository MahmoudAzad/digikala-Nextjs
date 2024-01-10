import Image from "next/image";
import DigikalaPossibilitiesCards from "@/components/cards/digikalaPossibilitiesCards";
import SimilarProductsSwiper from "@/components/swipers/similarProductsSwiper";
import { IProduct } from "@/types/product";
import ProductImages from "./sections/productImages";
import ProductDescription from "./sections/productDescription";

interface Props {
  singleProData: IProduct;
}

const SingleProductDesctop: React.FC<Props> = ({ singleProData }) => {
  return (
    <div className="hidden lg:block pt-24">
      <div className="mt-6 mx-5">
        <p className="text-sm text-gray-500 ">
          دیجی کالا / {singleProData.mainCategory} / {singleProData.category}/{" "}
          {singleProData.subCategory}
        </p>
        <div className="flex gap-x-6 items-start">
          <ProductImages singleProData={singleProData} />
          <ProductDescription singleProData={singleProData} />
        </div>
        <DigikalaPossibilitiesCards />
        <SimilarProductsSwiper />
        <div className="w-full h-48 relative">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-admin-landing/a8ec1bb32317f8f3d393ea6a0cee382772f9102a_1688480325.jpg"
            fill
            className="rounded-lg"
            alt="دیجی‌کالا"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductDesctop;
