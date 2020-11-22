import React, { useState } from "react";

function List(props) {
  const [isDone, setState] = useState(false);
  function click() {
    setState((preValue) => {
      return !preValue;
    });
  }
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}
export default List;
