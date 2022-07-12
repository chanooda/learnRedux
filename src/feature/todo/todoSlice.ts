import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDoState } from "../../interfaces/storeInterface";

const storage = window.localStorage;

const initialState = JSON.parse(storage.getItem("todos") || "[]") as IToDoState[];

// state에 직접 접근 (mutate) 해도 알아서 복사 처리해 줌 (immer 사용)
// TypeScript 사용시 초기값에 꼭꼭꼭꼭 Type처리 해줘야 함
export const toDos = createSlice({
  name: "toDoReducer",
  initialState,
  reducers: {
    add: (state: IToDoState[], action: PayloadAction<IToDoState>) => {
      const todo = action.payload;
      state.unshift(todo);
      storage.setItem("todos", JSON.stringify(state));
    },
    remove: (state: IToDoState[], action: PayloadAction<IToDoState>) => {
      const deletedToDos = state.filter((el) => el.id !== action.payload.id);
      storage.setItem("todos", JSON.stringify(deletedToDos));
      return deletedToDos;
    },
  },
});

export const { add, remove } = toDos.actions;
