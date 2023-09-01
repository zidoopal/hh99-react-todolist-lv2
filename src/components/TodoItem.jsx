import { useDispatch } from "react-redux";
import { deleteTodo, complateTodo } from "../redux/modules/todo";
import { Link } from "react-router-dom";

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div key={item.id}>
      <Link to={`/${item.id}`}>{item.id}</Link>
      <h2>{item.title}</h2>
      <p>{item.contents}</p>
      <button onClick={() => dispatch(deleteTodo(item.id))}>삭제하기</button>
      <button onClick={() => dispatch(complateTodo(item.id))}>
        {item.isDone === false ? "완료" : "취소"}
      </button>
    </div>
  );
}

export default TodoItem;
