import axios from "axios";

const rootApi = "http://localhost:9000";
axios.defaults.headers.post["Content-Type"] = "application/json";

const getHomePageData = () => {
  return axios.get(rootApi + "/homePageDetail", { cache: "no-store" });
};
export default getHomePageData;
