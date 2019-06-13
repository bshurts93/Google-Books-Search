import axios from "axios";

export default {
  getAllBooks() {
    return axios.get("/api/books");
  },

  searchGoogleBooks(query) {
    const booksData = [];

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
      .then(function(res) {
        const volumes = res.data.items;

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
      });
    return booksData;
  }
};
