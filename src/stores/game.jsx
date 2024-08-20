import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: {
    isStarted: false,
    isContinuing: false,
    isFinished: false,
  }
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: state => {
      state.game = {
        isStarted: true,
        isContinuing: true,
        isFinished: false
      }
    },
    endGame: state => {
      state.game = {
        isStarted: true,
        isContinuing: false,
        isFinished: true
      }
    },
    resetGame: state => {
      state = initialState;
    }
  }
})

export const { startGame, endGame, resetGame } = game.actions;
export default game.reducer;
