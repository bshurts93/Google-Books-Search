import axios from "axios";

export default {
  getAllBooks() {
    return axios.get("/api/books");
  }
};
