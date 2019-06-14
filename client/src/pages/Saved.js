import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";
import Header from "../components/Header";

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
      <div>
        <Header text="Saved" />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <ListItem key={book._id}>
                        <h4>
                          {book.title} by {book.author}
                        </h4>
                        <button
                          className="btn btn-danger"
                          data-id={book._id}
                          onClick={() => this.deleteBook(book._id)}
                        >
                          Delete
                        </button>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <List>
                    <h3 className="text-center">
                      Go to the search page to find and save books
                    </h3>
                  </List>
                )}
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
