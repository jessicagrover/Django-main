import axios from "axios";

export default axios.create({
  baseURL: " http://127.0.0.1:8006/calculate_score",
  headers: {
    "Content-type": "application/json"
  }
});