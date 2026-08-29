// const rootApi = "https://digikala-d567.onrender.com";
const rootApi = "https://digikala-json-vercel.vercel.app";

export const fetchingdb = async () => {
  try {
    const response = await fetch(`${rootApi}/db.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const fetching = async (endPoint: string) => {
  try {
    const fetchData = await fetch(rootApi + endPoint);
    const data = await fetchData.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleProduct = async (id: string) => {
  try {
    const res = await fetch(rootApi + `/product/${id}`, { cache: "no-store" });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMainPage = async (id: string) => {
  try {
    const res = await fetch(rootApi + `/mainCategory/${id}`, {
      cache: "no-store",
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
