import React from "react";
import "./style.css";

function List({ children }) {
  return <div className="container-fluid">{children}</div>;
}

function ListItem({ children }) {
  return <div className="book-list-item">{children}</div>;
}

export { List, ListItem };
