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
      return {
        todos: [
          ...state.todos,
          { ...action.payload, id: Date.now(), isDone: false },
        ],
      };
    case COMPLATE_TODO:
      const newComplateTodo = state.todos.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      return {
        todos: newComplateTodo,
      };

    case DELETE_TODO:
      const newDeleteTodo = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        todos: newDeleteTodo,
      };
    default:
      return state;
  }
};

export default todo;
