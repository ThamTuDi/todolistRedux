import { createStore } from "redux";
import rootReducer from "./reducer/todo";

const store = createStore(rootReducer)

export default store