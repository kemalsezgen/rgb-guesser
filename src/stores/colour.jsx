import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: {
    red: 0,
    green: 0,
    blue: 0
  }
};

const colour = createSlice({
  name: 'colour',
  initialState,
  reducers: {
    changeColour: (state, action) => {
      state.color = action.payload;
    },
    resetColour: state => {
      state.color = {
        red: 0,
        green: 0,
        blue: 0,
      };
    }
  }
})

export const { changeColour, resetColour } = colour.actions;
export default colour.reducer;
