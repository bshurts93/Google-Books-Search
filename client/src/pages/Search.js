import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentWillMount() {}

  searchForBooks = e => {
    e.preventDefault();
    const input = document.querySelector(".form-group input").value;

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + input)
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        this.setState({
          books: GoogleBooksAPI.parseApiData(data.items)
        });
      });
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
