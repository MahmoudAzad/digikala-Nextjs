import { IGallery } from "@/types/category";
import Image from "next/image";
interface Props {
  footerSymbols: IGallery[];
}
const E_NamadContent: React.FC<Props> = ({ footerSymbols }) => {
  return (
    <>
      <div className="lg:grid-cols-3 grid gap-x-16 mt-10 py-10 border-t ">
        <div className="text-slate-700 pb-10 lg:col-span-2">
          <h4 className="text-xl font-bold ">
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
          </h4>
          <p className="mt-3 text-xs leading-6">
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
            متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
            مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
            فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته
            از این طریق مشتریان ثابت خود را داشته باشد. تقریبا می‌توان گفت
            محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم
            نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا
            در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف
            عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی
            مناسب خود، درب منزل تحویل بگیرید.
          </p>
        </div>
        <div className="flex justify-center items-center lg:justify-end">
          {footerSymbols?.map((symbol, index) => (
            <div key={index} className="border-2 rounded-xl mx-2">
              <Image
                src={symbol.image}
                alt="نماد اعتماد"
                width={70}
                height={70}
                className="w-24 h-24 p-3"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs pt-10 text-slate-700 border-t ">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </p>
    </>
  );
};

export default E_NamadContent;
