import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentWillMount() {
    this.loadAllBooks();
  }

  loadAllBooks() {
    GoogleBooksAPI.getAllBooks().then(res =>
      this.setState({ books: res.data })
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
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>SEARCH</h3>
              <form>
                <Input />
                <FormBtn onClick={this.searchForBooks}>Search</FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>RESULTS</h3>
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

export default Books;
