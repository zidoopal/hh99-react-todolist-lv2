import { styled } from "styled-components";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

function Home() {
  return (
    <>
      <StBox>
        <h1>My Todo List</h1>
        <a>React</a>
      </StBox>
      <TodoInput />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}

export default Home;
