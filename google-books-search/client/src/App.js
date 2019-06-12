import React, { Component } from "react";
// Components
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { List, ListItem } from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Google Books App</h1>
        </Jumbotron>

        <List>
          <ListItem />
        </List>
      </div>
    );
  }
}

export default App;
