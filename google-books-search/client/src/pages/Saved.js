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

  searchForBooks = e => {
    e.preventDefault();
    const input = document.querySelector(".form-group input").value;
    const results = GoogleBooksAPI.searchGoogleBooks(input);

    this.setState(
      {
        books: results
      },
      () => {
        console.log(this.state);
      }
    );
    // this.setState(
    //   {
    //     books: [
    //       {
    //         title: "TEST 1",
    //         author: "TEST 1"
    //       }
    //     ]
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

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
                    <a href={"/books/" + book._id}>
                      {book.title} by {book.author}
                    </a>
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
