import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { TodoTemplateBlock } from '../styles/styles';
import GlobalStyle from '../styles/GlobalStyle';

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

function Home() {
  return (
    <TodoTemplateBlock>
      <GlobalStyle />
      <StBox>
        <h1>My Todo List</h1>
        <span>React</span>
      </StBox>
      <TodoInput />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </TodoTemplateBlock>
  );
}

export default Home;
