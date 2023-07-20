import React from "react";

function Task(props) {

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button type="button" onClick={props.handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
