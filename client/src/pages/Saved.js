import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentWillMount() {
    this.loadAllBooks();
  }

  loadAllBooks() {
    GoogleBooksAPI.getAllBooks().then(res =>
      this.setState({ books: res.data }, () => {
        console.log(this.state);
      })
    );
  }

  deleteBook(id) {
    GoogleBooksAPI.deleteBook(id);
    fetch("/books/" + id, {
      method: "DELETE",
      body: JSON.stringify({ id: id })
    }).then(res => {
      res.json();
      console.log("DELETED");
      this.loadAllBooks();
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>SAVED</h3>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>My Books</h3>
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <h4>
                      {book.title} by {book.author}
                    </h4>
                    <button
                      data-id={book._id}
                      onClick={() => this.deleteBook(book._id)}
                    >
                      Delete
                    </button>
                  </ListItem>
                ))}
              </List>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
