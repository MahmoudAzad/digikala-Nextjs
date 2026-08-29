// const rootApi = "https://digikala-json-vercel.vercel.app";

// export const fetchingdb = async () => {
//   try {
//     const response = await fetch(`${rootApi}/db.json`);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };

// export const fetching = async (endPoint: string) => {
//   try {
//     const fetchData = await fetch(rootApi + endPoint);
//     const data = await fetchData.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // export const fetchSingleProduct = async (id: string) => {
// //   try {
// //     const res = await fetch(rootApi + `/product/${id}`, { cache: "no-store" });
// //     let data = await res.json();
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // export const fetchMainPage = async (id: string) => {
// //   try {
// //     const res = await fetch(rootApi + `/mainCategory/${id}`, {
// //       cache: "no-store",
// //     });
// //     let data = await res.json();
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };
import { IProduct } from "@/types/product";

const rootApi = "https://digikala-json-vercel.vercel.app";

const getDbData = async () => {
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
