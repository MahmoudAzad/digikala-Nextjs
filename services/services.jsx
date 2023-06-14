import axios from "axios";

const rootApi = "http://localhost:9000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getHomePageDetail = () => {
  return axios.get(rootApi + "/homePageDetail", { cache: "no-store" });
};
export const getProduct = () => {
  return axios.get(rootApi + "/product", { cache: "no-store" });
};

export const getMainCategory = () => {
  return axios.get(rootApi + "/mainCategory", { cache: "no-store" });
};
export const getCategory = () => {
  return axios.get(rootApi + "/category", { cache: "no-store" });
};

export const getDigikalaSubCategories = () => {
  return axios.get(rootApi + "/DigikalaSubCategories", { cache: "no-store" });
};
export const getBrand = () => {
  return axios.get(rootApi + "/brand", { cache: "no-store" });
};
export const getBlogData = () => {
  return axios.get(rootApi + "/blog", { cache: "no-store" });
};
