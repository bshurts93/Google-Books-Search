import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    reloaded: false
  };

  componentWillMount() {}

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

  reloadState = e => {
    e.preventDefault();
    this.setState(
      {
        reloaded: true
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
                <FormBtn onClick={this.reloadState}>Reload State</FormBtn>
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
                  <ListItem key={book.id}>
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
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
