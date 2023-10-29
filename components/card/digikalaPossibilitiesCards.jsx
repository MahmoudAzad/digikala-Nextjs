import Image from "next/image";
import React from "react";
const DigikalaPossibilitiesCards = () => {
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-1 lg:gap-0 lg:flex-nowrap justify-around bg-white my-5 pt-3 pb-6 px-3 border-t border-b ">
      <div className="flex flex-col items-center">
        <Image
          src="https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg"
          alt="امکان تحویل اکسپرس"
          width={50}
          height={50}
        />
        <p className="text-xs text-gray-500">امکان تحویل اکسپرس</p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="https://www.digikala.com/statics/img/svg/infosection/support.svg"
          alt="۲۴ ساعته، ۷ روز هفته"
          width={50}
          height={50}
        />
        <p className="text-xs text-gray-500">۲۴ ساعته، ۷ روز هفته</p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg"
          alt="امکان پرداخت در محل"
          width={50}
          height={50}
        />
        <p className="text-xs text-gray-500">امکان پرداخت در محل</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://www.digikala.com/statics/img/svg/infosection/days-return.svg"
          alt="هفت روز ضمانت بازگشت کالا"
          width={50}
          height={50}
        />
        <p className="text-xs text-gray-500">هفت روز ضمانت بازگشت کالا</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://www.digikala.com/statics/img/svg/infosection/original-products.svg"
          alt="ضمانت اصل بودن کالا"
          width={50}
          height={50}
        />
        <p className="text-xs text-gray-500">ضمانت اصل بودن کالا</p>
      </div>
    </div>
  );
};

export default DigikalaPossibilitiesCards;
