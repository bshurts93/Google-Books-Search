import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Header from "../components/Header";
import "./style.css";

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
      <div>
        <Header text="Search" />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <form className="search-bar">
                <div className="row">
                  <Col size="md-10">
                    <Input />
                  </Col>
                  <Col size="md-2">
                    <FormBtn onClick={this.searchForBooks}>Search</FormBtn>
                  </Col>
                </div>
              </form>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <Jumbotron>
                {this.state.books.length ? (
                  <List>
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
                          <Col size="md-1">
                            <img src={book.image} alt="book-thumbnail" />
                          </Col>
                          <Col size="md-11">
                            <div className="description">
                              <p>
                                {book.description} -{" "}
                                <a href={book.link}>See more</a>
                              </p>

                              <button
                                className="btn btn-primary"
                                onClick={() => GoogleBooksAPI.saveBook(book)}
                              >
                                Save
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <List>
                    <h3 className="text-center">Search to see books</h3>
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

export default Books;
