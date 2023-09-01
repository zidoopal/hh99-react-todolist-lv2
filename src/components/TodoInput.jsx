import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todo';
import { StInput, StAddButton, StInputBox } from '../styles/styles';

function TodoInput() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const dispatch = useDispatch();
  const titleInput = useRef();
  const contentsInput = useRef();

  const titleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsOnChangeHandler = (event) => {
    setContents(event.target.value);
  };

  // input에 입력값 없을 시  alert 대신 focus 효과로 대신해보기
  const addTodoHandler = (e) => {
    e.preventDefault();

    if (title.length < 1 || contents.length < 1) {
      if (title.length < 1) {
        titleInput.current.focus();
      } else {
        contentsInput.current.focus();
      }
      return;
    }

    dispatch(addTodo({ title, contents }));

    // 저장 후 작성 폼 데이터 초기값으로
    setTitle('');
    setContents('');
  };

  return (
    <StInputBox>
      제목
      <StInput
        type="text"
        value={title}
        onChange={titleOnChangeHandler}
        ref={titleInput}
      />
      내용
      <StInput
        type="text"
        value={contents}
        onChange={contentsOnChangeHandler}
        ref={contentsInput}
      />
      <StAddButton onClick={addTodoHandler}>추가하기</StAddButton>
    </StInputBox>
  );
}

export default TodoInput;
