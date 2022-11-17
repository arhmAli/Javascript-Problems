import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0
};
const Changer = createSlice({
  name: "changer",
  initialState,
  reducers: {
    addNum: (state) => {
      return state.value + 1;
    }
  }
});
export const { addNum } = Changer.actions;
export default Changer.reducer;
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0
};
const Changer = createSlice({
  name: "changer",
  initialState,
  reducers: {
    addNum: (state) => {
      return state.value + 1;
    }
  }
});
export const { addNum } = Changer.actions;
export default Changer.reducer;
//random input from user
let a=prompt("enter a number");
console.log(a^^50+a^^2)
