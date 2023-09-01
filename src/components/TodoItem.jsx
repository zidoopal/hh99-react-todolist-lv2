import { useDispatch } from "react-redux";
import { deleteTodo, complateTodo } from "../redux/modules/todo";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StTodoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  border: 2px solid #ccc;
  border-radius: 10px;
`;
const StButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const StButton = styled.button`
  padding: 5px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #0056b3;
  }
`;

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <StTodoBox key={item.id}>
      <Link to={`/${item.id}`}>{item.id}</Link>
      <h2>{item.title}</h2>
      <p>{item.contents}</p>
      <StButtonGroup>
        <StButton onClick={() => dispatch(deleteTodo(item.id))}>
          삭제하기
        </StButton>
        <StButton onClick={() => dispatch(complateTodo(item.id))}>
          {item.isDone === false ? "완료" : "취소"}
        </StButton>
      </StButtonGroup>
    </StTodoBox>
  );
}

export default TodoItem;
