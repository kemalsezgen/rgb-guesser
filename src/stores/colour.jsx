import { createSlice } from "@reduxjs/toolkit";

const getRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { red: r, green: g, blue: b };
}

function calculateAccuracy(actual, guess) {
  const redAccuracy = (1 - Math.abs(actual.red - guess.red) / 255) * 100;
  const greenAccuracy = (1 - Math.abs(actual.green - guess.green) / 255) * 100;
  const blueAccuracy = (1 - Math.abs(actual.blue - guess.blue) / 255) * 100;

  const overallAccuracy = (redAccuracy + greenAccuracy + blueAccuracy) / 3;
  console.log("ovv: " + overallAccuracy)

  return overallAccuracy.toFixed(2);
}

const initialState = {
  color: getRandomRGB(),
  guess: {
    data: null,
    percentage: null,
  },
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
      state.guess = {
        data: action.payload,
        percentage: Number(calculateAccuracy(action.payload, state.color))
      };
      if (!state.guessList.some(g => g.data.red === state.guess.data.red && g.data.green === state.guess.data.green && g.data.blue === state.guess.data.blue)) {
        state.guessList.push(state.guess);
      }
    },
    resetGuess: state => {
      state.guess = {
        data: null,
        percentage: null,
      };
    },
    resetGuessList: state => {
      state.guessList = [];
    }
  }
})

export const { changeColour, resetColour, guessColour, resetGuess, resetGuessList } = colour.actions;
export default colour.reducer;
