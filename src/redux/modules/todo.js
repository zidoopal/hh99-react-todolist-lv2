import React from "react";

// action value
const ADD_TODO = "todo/ADD_TODO";
const COMPLATE_TODO = "todo/COMPLATE_TODO";
const DELETE_TODO = "todo/DELETE_TODO";

// action creater
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const complateTodo = (payload) => {
  return {
    type: COMPLATE_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  console.log(payload);
  return {
    type: DELETE_TODO,
    payload,
  };
};

//초기값 설정하기
const initialState = {
  todos: [{ title: "redux", contents: "빨리 끝내기", id: 0, isDone: false }],
};
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state.todos);
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload, id: Date.now(), isDone: false },
        ],
      };
    case COMPLATE_TODO:
      return;
    case DELETE_TODO:
      return {};
    default:
      return state;
  }
};

export default todo;
