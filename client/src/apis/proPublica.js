import axios from "axios";
// const myInit = {
//   method: "GET",
//   headers: { "X-API-Key": "1BYtV21DPfuMnFOHDHBgbDA3xPDeCcMvoAB2y7e8" },
//   mode: "cors",
//   cache: "default"
// };
export default axios.create({
  baseURL: "https://api.propublica.org/congress/v1",
  headers: { "X-API-Key": "1BYtV21DPfuMnFOHDHBgbDA3xPDeCcMvoAB2y7e8" }
});
