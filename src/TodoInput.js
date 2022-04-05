import { useState } from "react";
import React from "react";
import nextId, { useId } from "react-id-generator";
const TodoInput = ({ inputWord, setInputWord, todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const generateId = () => {
    const newId = nextId();
    // id++;
    return newId;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = { Text: todo, completed: false, id: generateId() };
    // setInputWord(todo);
    setTodos([temp, ...todos]);
    // todos == [] ? setTodos(temp) : setTodos([...todos, temp]);
    console.log(todos);
    setTodo("");
  };
  return (
    <form action="" className="todo__form">
      <input
        className="todo__form__input"
        type="text"
        required
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
          console.log(todo);
        }}
      />
      <button
        className="todo__form__submit"
        type="submit"
        onClick={handleSubmit}
      >
        Add
      </button>
      <p>{todo}</p>
    </form>
  );
};

export default TodoInput;
