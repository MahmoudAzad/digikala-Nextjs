import Image from "next/image";
import Link from "next/link";
import { ICategory } from "@/types/category";
import { IProduct } from "@/types/product";
import { HiArrowLeft, HiOutlineEye, HiOutlineSparkles } from "react-icons/hi";

interface Props {
  categories: ICategory[];
  products: IProduct[];
}

const BasedOnUserViewsCards: React.FC<Props> = ({ categories, products }) => {
  const subCategories = (categories ?? [])
    .flatMap((category) => category.subCategory ?? [])
    .slice(0, 4);

  if (!subCategories.length) return null;

  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-[1600px] px-3 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-14"
    >
      {/* Section heading */}
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
            <HiOutlineSparkles className="text-base" />
            پیشنهادهای ویژه برای شما
          </div>

          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            ادامه خرید بر اساس علاقه‌مندی‌های شما
          </h2>

          <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
            دسته‌هایی که می‌توانند محصولات مورد علاقه‌تان را داشته باشند.
          </p>
        </div>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
        {subCategories.map((category) => {
          const categoryProducts = (products ?? [])
            .filter((product) => product.subCategory === category.name)
            .slice(0, 4);

          return (
            <article
              key={category.id ?? category.name}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/[0.06] sm:rounded-3xl sm:p-5"
            >
              {/* Decorative background */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-sky-50 opacity-80 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card heading */}
              <div className="relative mb-5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="line-clamp-1 text-base font-bold text-slate-800 transition-colors group-hover:text-sky-700">
                    {category.name}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    انتخاب‌هایی برای سلیقه شما
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                  <HiOutlineEye className="text-xl" />
                </span>
              </div>

              {/* Products grid */}
              <div className="relative grid grid-cols-2 gap-2">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    aria-label={`مشاهده ${product.name}`}
                    className="group/product relative flex min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/70 p-2 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50/60 sm:p-3"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        sizes="(max-width: 639px) 42vw, (max-width: 1279px) 20vw, 240px"
                        className="object-contain p-1 transition-transform duration-500 group-hover/product:scale-110"
                      />
                    </div>

                    <span className="mt-2 line-clamp-2 min-h-9 w-full text-center text-[11px] font-medium leading-5 text-slate-600 transition-colors group-hover/product:text-sky-700 sm:text-xs">
                      {product.name}
                    </span>
                  </Link>
                ))}

                {/* Empty states */}
                {categoryProducts.length === 0 && (
                  <div className="col-span-2 flex min-h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-4 text-center">
                    <HiOutlineSparkles className="mb-2 text-2xl text-slate-300" />
                    <p className="text-xs text-slate-500">
                      محصولی برای نمایش در این دسته وجود ندارد.
                    </p>
                  </div>
                )}

                {categoryProducts.length > 0 &&
                  categoryProducts.length < 4 &&
                  Array.from({
                    length: 4 - categoryProducts.length,
                  }).map((_, index) => (
                    <div
                      key={`empty-${category.name}-${index}`}
                      aria-hidden="true"
                      className="rounded-2xl border border-dashed border-slate-100 bg-slate-50/40"
                    />
                  ))}
              </div>

              {/* Footer link */}
              <Link
                href={`/category/${encodeURIComponent(category.name)}`}
                className="relative mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-sky-700 transition-all duration-300 hover:bg-sky-600 hover:text-white sm:text-sm"
              >
                مشاهده همه محصولات
                <HiArrowLeft className="text-base transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BasedOnUserViewsCards;
