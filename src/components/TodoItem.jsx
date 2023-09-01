import { useDispatch } from 'react-redux';
import { deleteTodo, complateTodo } from '../redux/modules/todo';
import { Link } from 'react-router-dom';
import { StTodoBox, StButtonGroup, StButton } from '../styles/styles';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <StTodoBox key={item.id}>
      <Link to={`/${item.id}`}>상세보기</Link>
      <h2>{item.title}</h2>
      <p>{item.contents}</p>
      <StButtonGroup>
        <StButton onClick={() => dispatch(deleteTodo(item.id))}>
          삭제하기
        </StButton>
        <StButton onClick={() => dispatch(complateTodo(item.id))}>
          {item.isDone === false ? '완료' : '취소'}
        </StButton>
      </StButtonGroup>
    </StTodoBox>
  );
}

export default TodoItem;
