import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:8080");

      setTodos(res.data);
    };
    getTodos();
  }, []);

  const createTodo = async (text) => {
    const res = await axios.post("http://localhost:8080", { message: text });
    setTodos(res.data);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoInput createTodo={createTodo} />
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
