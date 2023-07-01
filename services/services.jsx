import axios from "axios";

const rootApi = "http://localhost:9000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const fetchHomePageDetail = async () => {
  const fetchData = await fetch(rootApi + "/homePageDetail", {
    cache: "no-store",
  });
  const data = await fetchData.json();
  return data;
};

export const fetchProduct = async () => {
  const fetchData = await fetch(rootApi + "/product", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};

export const fetchMainCategory = async () => {
  const fetchData = await fetch(rootApi + "/mainCategory", {
    cache: "no-store",
  });
  const data = fetchData.json();
  return data;
};

export const fetchCategory = async () => {
  const fetchData = await fetch(rootApi + "/category", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};

export const fetchDigikalaSubCategories = async () => {
  const fetchData = await fetch(rootApi + "/DigikalaSubCategories", {
    cache: "no-store",
  });
  const data = fetchData.json();
  return data;
};
export const fetchBrand = async () => {
  const fetchData = await fetch(rootApi + "/brand", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};
export const fetchBlogData = async () => {
  const fetchData = await fetch(rootApi + "/blog", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};
export const fetchDoubleCards = async () => {
  const fetchData = await fetch(rootApi + "/dobleCards", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};
export const fetchFooter = async () => {
  const fetchData = await fetch(rootApi + "/footer", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};
export const fetchNotFound = async () => {
  const fetchData = await fetch(rootApi + "/notFound", { cache: "no-store" });
  const data = fetchData.json();
  return data;
};
