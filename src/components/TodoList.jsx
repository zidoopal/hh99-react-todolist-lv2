import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { styled } from "styled-components";

const StList = styled.div`
  position: relative;
  border: 1px solid white;
`;

const StTodo = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StWorking = styled.h3`
  position: absolute;
  background-color: #007bff; /* 배경색 예시, 원하는 색상으로 변경 가능 */
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
`;

function TodoList({ isDone }) {
  const todo = useSelector((state) => state.todo);

  return (
    <StList>
      <StWorking isDone={isDone}>{isDone ? "Done" : "Working"}</StWorking>
      <StTodo>
        {todo.todos
          .filter((item) => item.isDone === isDone)
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </StTodo>
    </StList>
  );
}

export default TodoList;
