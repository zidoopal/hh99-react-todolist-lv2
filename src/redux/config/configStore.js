import { combineReducers, createStore } from "redux";
import todo from "../modules/todo";

const rooteReducer = combineReducers({
  todo: todo,
});

const store = createStore(rooteReducer);

export default store;
