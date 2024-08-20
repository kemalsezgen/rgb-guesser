import { configureStore } from "@reduxjs/toolkit";

import colour from "./colour";
import game from "./game";

const store = configureStore({
  reducer: {
    colour,
    game
  }
})

export default store;