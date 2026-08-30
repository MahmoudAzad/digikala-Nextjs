import { IProduct } from "@/types/product";

const rootApi = "https://digikala-json-vercel.vercel.app";
// const rootApi = "https://digikala-d567.onrender.com";

export const getDbData = async () => {
  try {
    const response = await fetch(`${rootApi}/db.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch database: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch database:", error);
    throw error;
  }
};

export const fetchingdb = async () => {
  return getDbData();
};

export const fetchSingleProduct = async (id: string) => {
  try {
    const data = await getDbData();

    const product = data.product.find(
      (item: IProduct) => String(item.id) === String(id),
    );

    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
};

export const fetchMainPage = async (id: string) => {
  try {
    const data = await getDbData();

    const mainCategory = data.mainCategory.find(
      (item: any) => String(item.id) === String(id),
    );

    return mainCategory;
  } catch (error) {
    console.error("Failed to fetch main category:", error);
    throw error;
  }
};
