import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    //   Get books
  }

  loadAllBooks() {
    GoogleBooksAPI.getAllBooks().then(res =>
      this.setState({ books: res.data }).catch(err => console.log(err))
    );
  }
}

export default Books;
