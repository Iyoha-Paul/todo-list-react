import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todo from "./Todo";
function App() {
  return (
    <Router>
      <div className="App">
        <Todo />
      </div>
    </Router>
  );
}

export default App;
