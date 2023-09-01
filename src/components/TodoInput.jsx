import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";

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
    <div>
      제목
      <input type="text" value={title} onChange={titleOnChangeHandler} />
      내용
      <input type="text" value={contents} onChange={contentsOnChangeHandler} />
      <button onClick={addTodoHandler}>추가하기</button>
    </div>
  );
}

export default TodoInput;
