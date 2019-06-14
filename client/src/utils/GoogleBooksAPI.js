import axios from "axios";

export default {
  getAllBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  parseApiData(volumes) {
    const booksData = [];

    volumes.forEach(element => {
      const book = element.volumeInfo;

      const bookData = {
        id: element.id,
        title: book.title,
        author: book.authors,
        description: book.description,
        image: book.imageLinks.thumbnail,
        link: book.infoLink
      };

      if (book.authors === undefined) {
        bookData.author = "N/A";
      } else {
        bookData.author = book.authors.join(", ");
      }

      booksData.push(bookData);
    });
    return booksData;
  }
};
