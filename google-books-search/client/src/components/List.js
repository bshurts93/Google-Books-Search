import React from "react";

function List({ children }) {
  return (
    <div className="container">
      <ul className="book-list">{children}</ul>
    </div>
  );
}

function ListItem({ children }) {
  return <li className="book-list-item">{children}</li>;
}

export { List, ListItem };
