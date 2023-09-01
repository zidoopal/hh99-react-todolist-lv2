import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function About() {
  // store에 접근해서 todo 값 읽어오기 (state에 todo.js의 state가 담김)
  const todo = useSelector((state) => {
    return state.todo;
  });
  const params = useParams();

  const foundData = todo.todos.find((item) => {
    return item.id === parseInt(params.id);
  });
  console.log(foundData);
  return (
    <div>
      <div>
        <p>{foundData.id}</p>
        <button>
          <Link to={`/`}>이전으로</Link>
        </button>
      </div>
      <h2>{foundData.title}</h2>
      <h3>{foundData.contents}</h3>
    </div>
  );
}

export default About;
