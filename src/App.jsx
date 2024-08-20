import React from "react";
import { useSelector } from 'react-redux';
import ColourContainer from "./components/ColourContainer";
import Guesser from "./components/Guesser";
import Predictions from "./components/Predictions";
import Footer from "./components/Footer";

const App = () => {
  const { color } = useSelector(state => state.colour);
  const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

  const brightness = (color.red * 299 + color.green * 587 + color.blue * 114) / 1000;
  const textColor = brightness < 128 ? '#FFFFFF' : '#000000';

  return (
    <div className="App" style={{ backgroundColor: rgbColor, color: textColor }}>
      <ColourContainer />
      <Predictions textColor={textColor} />
      <Guesser textColor={textColor} />
      <Footer />
    </div>
  );
}

export default App;