import axios from "axios";

export default {
  getAllBooks() {
    axios.get("/api/books");
  }
};
