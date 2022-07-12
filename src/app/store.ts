import { configureStore } from "@reduxjs/toolkit";
import { counter } from "../feature/counter/counterSlice";
import { toDos } from "../feature/todo/todoSlice";

const store = configureStore({
  reducer: {
    counter: counter.reducer,
    toDos: toDos.reducer,
  },
});

export default store;
