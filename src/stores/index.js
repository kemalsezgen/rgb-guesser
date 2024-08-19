import { configureStore } from "@reduxjs/toolkit";

import colour from "./colour";

const store = configureStore({
  reducer: {
    colour
  }
})

export default store;