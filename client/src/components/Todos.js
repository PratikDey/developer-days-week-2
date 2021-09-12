import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  if (!todos) {
    return <h1>loading</h1>;
  } else {
    return todos.map((todo) => <TodoItem todo={todo} />);
  }
};

export default Todos;
