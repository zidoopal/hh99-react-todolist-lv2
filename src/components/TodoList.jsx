import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList({ isDone }) {
  const todo = useSelector((state) => state.todo);

  return (
    <div>
      <h3>{isDone ? "Done" : "Working"}</h3>
      <div>
        {todo.todos
          .filter((item) => item.isDone === isDone)
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default TodoList;
