import React from "react";
import ColourContainer from "./components/ColourContainer";
import Guesser from "./components/Guesser";
import Predictions from "./components/Predictions";

const App = () => {
  return (
    <div className="App">
      <ColourContainer />
      <Predictions />
      <Guesser />
    </div>
  )
}

export default App;
