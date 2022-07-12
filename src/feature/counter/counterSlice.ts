import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: 0 as number,
  reducers: {
    up: (state: number, actions: {}) => {
      console.log(actions);
      state = state + 1;
      return state;
    },
    down: (state: number, actions: {}) => {
      console.log(actions);
      state = state - 1;
      return state;
    },
  },
});

export const { up, down } = counter.actions;
