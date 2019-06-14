import React from "react";
import "./style.css";

function Header({ text }) {
  return (
    <div className="header text-center">
      <div class="row h-100">
        <div id="col" class="col-md-12 my-auto">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
