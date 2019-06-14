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

    // fetch(GoogleBooksAPI.searchGoogleBooks(input)).then(res => {
    //   console.log(res);
    //   // this.setState({
    //   //   books: res
    //   // });
    // });
    this.setState({
      books: results
    });
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
              <div className="container-fluid">
                <h3>SEARCH</h3>
                <form>
                  <Input />
                  <FormBtn onClick={this.searchForBooks}>Search</FormBtn>
                  <FormBtn onClick={this.reloadState}>Reload State</FormBtn>
                </form>
              </div>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <List>
                <h3>RESULTS</h3>

                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <Row>
                      <Col size="md-12">
                        {" "}
                        <h4>
                          {book.title} - {book.author}
                        </h4>
                        <hr />
                      </Col>
                    </Row>
                    <Row className="img-desc">
                      <Col size="md-2">
                        <img src={book.image} alt="book-thumbnail" />
                      </Col>
                      <Col size="md-10">
                        <p>
                          {book.description} - <a href={book.link}>See more</a>
                        </p>
                        <p onClick={() => GoogleBooksAPI.saveBook(book)}>
                          Save
                        </p>
                      </Col>
                    </Row>
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
