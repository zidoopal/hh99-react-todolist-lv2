import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { StList, StWorking, StTodo } from '../styles/styles';

function TodoList({ isDone }) {
  const todo = useSelector((state) => state.todo);

  return (
    <StList>
      <StWorking isDone={isDone}>{isDone ? 'Done' : 'Working'}</StWorking>
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
