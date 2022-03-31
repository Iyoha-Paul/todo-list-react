const TodoInput = () => {
  function addTodo() {
    console.log("working");
  }
  return (
    <div className="todo__form">
      <input
        className="todo__form__input"
        type="text"
        required
        placeholder="Add Todo"
      />
      <button className="todo__form__submit" onClick={() => addTodo()}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
