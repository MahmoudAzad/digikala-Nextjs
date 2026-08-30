"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

import { IProduct } from "@/types/product";
import { getDbData } from "@/services/services";

interface ProductSearchProps {
  searchParams: string;
  onClose?: () => void;
  className?: string;
}

const ProductSearch = ({
  searchParams,
  onClose,
  className = "",
}: ProductSearchProps) => {
  const [results, setResults] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  /*
   * Open dropdown when searchParams
   * has at least 2 characters
   */
  useEffect(() => {
    const query = searchParams.trim();

    if (query.length >= 2) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setResults([]);
      setLoading(false);
      setHasSearched(false);

      abortControllerRef.current?.abort();
    }
  }, [searchParams]);

  /*
   * Close dropdown when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  /*
   * Search
   */
  useEffect(() => {
    const query = searchParams.trim();

    if (query.length < 2) {
      return;
    }

    setHasSearched(false);

    const timer = setTimeout(async () => {
      // Cancel previous request
      abortControllerRef.current?.abort();

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        setLoading(true);

        const data = await getDbData();

        if (controller.signal.aborted) return;

        const normalizedQuery = query.toLowerCase();

        const filteredProducts = data.product.filter((product: IProduct) => {
          const title = product.name?.toLowerCase() ?? "";
          const brand = product.brand?.toLowerCase() ?? "";

          return (
            title.includes(normalizedQuery) || brand.includes(normalizedQuery)
          );
        });

        setResults(filteredProducts);
        setHasSearched(true);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Search error:", error);

        setResults([]);
        setHasSearched(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [searchParams]);

  if (!isOpen || searchParams.trim().length < 2) {
    return null;
  }

  return (
    <div
      ref={searchRef}
      className={`
    absolute
    right-0
    top-[calc(100%+8px)]
    z-50
    overflow-hidden
    rounded-xl
    border
    border-slate-200
    bg-white
    shadow-[0_10px_40px_rgba(0,0,0,0.12)]
    ${className}
  `}
    >
      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center px-5 py-8">
          <div
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-slate-200
              border-t-slate-700
            "
          />

          <span className="mr-3 text-sm text-slate-500">در حال جستجو...</span>
        </div>
      )}

      {/* Results */}
      {!loading && hasSearched && results.length > 0 && (
        <div className="max-h-[420px] overflow-y-auto">
          <div className="border-b border-slate-100 px-4 py-3">
            <span className="text-xs font-medium text-slate-400">
              نتایج جستجو
            </span>
          </div>

          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={() => {
                setIsOpen(false);
                onClose?.();
              }}
              className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-slate-100
                  px-4
                  py-3
                  transition
                  last:border-b-0
                  hover:bg-slate-50
                "
            >
              {/* Product Image */}
              <div
                className="
                    relative
                    h-16
                    w-16
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    bg-slate-50
                  "
              >
                <Image
                  src={product.productImage[0].image}
                  alt={product.name}
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>

              {/* Product Info */}
              <div className="min-w-0 flex-1">
                <p
                  className="
                      line-clamp-2
                      text-sm
                      font-medium
                      leading-6
                      text-slate-700
                    "
                >
                  {product.name}
                </p>

                {product.brand && (
                  <p className="mt-1 text-xs text-slate-400">{product.brand}</p>
                )}
              </div>

              {/* Arrow */}
              <span className="text-slate-300">←</span>
            </Link>
          ))}
        </div>
      )}

      {/* No Result */}
      {!loading && hasSearched && results.length === 0 && (
        <div className="px-5 py-10 text-center">
          <HiOutlineSearch
            className="
                mx-auto
                mb-3
                h-8
                w-8
                text-slate-300
              "
          />

          <p className="text-sm font-medium text-slate-600">محصولی پیدا نشد</p>

          <p className="mt-1 text-xs text-slate-400">
            عبارت دیگری را امتحان کنید
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
