import { configureStore } from "@reduxjs/toolkit";
import { toDos } from "../feature/todo/todoSlice";

const store = configureStore({
  reducer: {
    toDos: toDos.reducer,
  },
});

export default store;
