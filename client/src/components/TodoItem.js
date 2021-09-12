import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todo }) => {
  return (
    <div className="todoItem">
      <h1>{todo.message}</h1>
    </div>
  );
};

export default TodoItem;
