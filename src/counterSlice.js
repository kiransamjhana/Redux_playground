import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
  {
    name: "counter",
    initialState: {
      counter: 0,
    },

    reducers: {
      increment: (state) => {
        state.counter = state.counter + 1;
      },
      decrement: (state) => {
        state.counter = state.counter - 1;
      },
    },
  },
  {
    name: "formCounter",
    initialState: {
      value: "",
    },

    reducers: {
      realTimeType: (state, actions) => {
        state.counter=
       
      },
    },
  }
);

const { reducer, actions } = counterSlice;
export const { increment, decrement, realTimeType } = actions;

export default reducer;
