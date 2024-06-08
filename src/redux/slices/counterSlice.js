import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
