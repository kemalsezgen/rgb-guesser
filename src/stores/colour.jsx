import { createSlice } from "@reduxjs/toolkit";

const getRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { red: r.toString(), green: g.toString(), blue: b.toString() };
}

const initialState = {
  color: getRandomRGB(),
  guess: null,
  guessList: []
};

const colour = createSlice({
  name: 'colour',
  initialState,
  reducers: {
    changeColour: state => {
      state.color = getRandomRGB();
    },
    resetColour: state => {
      state.color = {
        red: 0,
        green: 0,
        blue: 0,
      };
    },
    guessColour: (state, action) => {
      state.guess = action.payload;
      if (!state.guessList.some(g => g.red === state.guess.red && g.green === state.guess.green && g.blue === state.guess.blue)) {
        state.guessList.push(state.guess);
      }
    },
    resetGuess: state => {
      state.guess = null;
    },
    resetGuessList: state => {
      state.guessList = [];
    }
  }
})

export const { changeColour, resetColour, guessColour, resetGuess, resetGuessList } = colour.actions;
export default colour.reducer;
