import Navigation from "./Navigation";
import TodoInput from "./TodoInput";

const Todo = () => {
  return (
    <div className="container">
      <div className="todo">
        <div className="todo__header">
          <h1>What needs to be done?</h1>
          <TodoInput />
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Todo;
