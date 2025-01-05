import axios from "axios";

const apiClient = axios.create({
  params: {
    key: "SUA_API",
  },
  baseURL: "https://api.rawg.io/api",
});

export default apiClient;
