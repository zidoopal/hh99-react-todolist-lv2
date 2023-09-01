import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, complateTodo, deleteTodo } from "../redux/modules/todo";
import { Link } from "react-router-dom";

function Home() {
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
            setTitle("");
            setContents("");
          }}
        >
          추가하기
        </button>
      </div>
      <div>
        <h3>Working</h3>
        <div>
          {todo.todos
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/${item.id}`}>{item.id}</Link>
                  <h2>{item.title}</h2>
                  <p>{item.contents}</p>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(item.id));
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      dispatch(complateTodo(item.id));
                    }}
                  >
                    {item.isDone === false ? "완료" : "취소"}
                  </button>
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
                  <Link to={`/${item.id}`}>{item.id}</Link>
                  <h2>{item.title}</h2>
                  <p>{item.contents}</p>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(item.id));
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      dispatch(complateTodo(item.id));
                    }}
                  >
                    {item.isDone === false ? "완료" : "취소"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;