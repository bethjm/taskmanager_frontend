import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3009/api/tasks",
});
