const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(cors());
app.use(express.json({ extended: false }));

const todos = [
  {
    message: "Start adding your todos",
    id: 1,
  },
];

app.get("/", (req, res) => {
  res.status(200).json(todos);
});

app.post("/", (req, res) => {
  const newTodo = {
    message: req.body.message,
    id: uuidv4(),
  };
  todos.push(newTodo);
  res.status(201).json(todos);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
