import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";
import { styled } from "styled-components";

const StInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 3px solid #007bff;
  border-radius: 8px;
  margin: 20px auto;

  font-size: 30px;
  height: 100px;
  margin-bottom: 10px;
  padding: 0px 20px 0px 20px;
  gap: 10px;
`;

const StInput = styled.input`
  max-width: 75%;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 0px;
  border-radius: 13px;
  padding: 5px;
`;

const StAddButton = styled.button`
  margin-left: auto;
  font-size: 20px;
  border-radius: 10px;
`;

function TodoInput() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();

  const titleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsOnChangeHandler = (event) => {
    setContents(event.target.value);
  };

  const addTodoHandler = () => {
    dispatch(addTodo({ title, contents }));
    setTitle("");
    setContents("");
  };

  return (
    <StInputBox>
      제목
      <StInput type="text" value={title} onChange={titleOnChangeHandler} />
      내용
      <StInput
        type="text"
        value={contents}
        onChange={contentsOnChangeHandler}
      />
      <StAddButton onClick={addTodoHandler}>추가하기</StAddButton>
    </StInputBox>
  );
}

export default TodoInput;
