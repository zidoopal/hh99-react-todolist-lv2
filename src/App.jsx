import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, complateTodo, deleteTodo } from "./redux/modules/todo";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // input 값 onChange Handler ----------------------------------
  const titleOnChangeHandler = (event) => {
    const { value } = event.target;
    return setTitle(value);
  };
  const contentsOnChangeHandler = (event) => {
    const { value } = event.target;
    return setContents(value);
  };
  // ------------------------------------------------------------

  // store에 접근해서 todo 값 읽어오기 (state에 todo.js의 state가 담김)
  const todo = useSelector((state) => {
    return state.todo;
  });
  // ------------------------------------------------------------

  // dispatch 가져오기 --------------------------------------------
  const dispatch = useDispatch();
  // ------------------------------------------------------------

  return (
    <>
      <div>
        <h1>My Todo List</h1>
        <a>React</a>
      </div>
      <div>
        제목
        <input type="text" value={title} onChange={titleOnChangeHandler} />
        내용
        <input
          type="text"
          value={contents}
          onChange={contentsOnChangeHandler}
        />
        <button
          onClick={() => {
            dispatch(addTodo({ title, contents }));
          }}
        >
          추가하기
        </button>
      </div>
      <div>
        <h3>Working</h3>
        <div>
          {todo.todos.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.contents}</p>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(todo.todos[0].id));
                  }}
                >
                  삭제하기
                </button>
                <button>완료</button>
              </div>
            );
          })}
        </div>
        <h3>Done</h3>
        <div>
          {todo.todos
            .filter((item) => {
              return item.isDone === true;
            })
            .map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.contents}</p>
                  <button>삭제하기</button>
                  <button>완료</button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
