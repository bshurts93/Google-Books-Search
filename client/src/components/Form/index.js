import React from "react";
import "./style.css";

function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" {...props} />
    </div>
  );
}

function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

export { Input, TextArea, FormBtn };
