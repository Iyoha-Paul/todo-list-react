import { useState } from "react";
import React from "react";
import nextId, { useId } from "react-id-generator";
const TodoInput = ({ inputWord, setInputWord, todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const inputWordHandler = (e) => {
    setTodo(todo);
  };
  let id = 1;
  const generateId = () => {
    const newId = id + 1;
    id++;
    return newId;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputWord(todo);
    setTodos([...todos, { Text: todo, completed: false, id: generateId() }]);
    console.log(todos[0].id);
    setTodo("");
  };
  return (
    <form action="" className="todo__form" onSubmit={handleSubmit}>
      <input
        className="todo__form__input"
        type="text"
        required
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo__form__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
