import axios from "axios";

//in production there is no localhost , so we have to make this dynammic
const BASE_URL =
  import.meta.MODE === "development" ? "http:localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default api;
