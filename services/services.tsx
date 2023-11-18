const rootApi = "https://digikala-d567.onrender.com";

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
