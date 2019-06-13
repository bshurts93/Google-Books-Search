import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";

function App() {
  return (
    <div>
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link
                    to="/search"
                    className="nav-item nav-link active"
                    href="#"
                  >
                    Search <span className="sr-only">(current)</span>
                  </Link>
                  <Link
                    to="/saved"
                    className="nav-item nav-link active"
                    href="#"
                  >
                    Saved
                  </Link>
                </div>
              </div>
            </nav>
            <Switch>
              <Route path="/search" exact component={Search} />
              <Route path="/saved" component={Saved} />
              <Route path="/" component={Search} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
