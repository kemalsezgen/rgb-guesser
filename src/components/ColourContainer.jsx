import React from 'react';
import { useSelector } from 'react-redux';

const ColourContainer = () => {
  const { color, guess } = useSelector(state => state.colour);

  const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  const rgbGuess = guess.data ? `rgb(${guess.data.red}, ${guess.data.green}, ${guess.data.blue})` : ``;

  return (
    <div className='colour-container'>
      <h2>{guess ? "color" : "guess the rgb codes"}</h2>
      <div
        className='colour-container-inner'
        style={{ backgroundColor: rgbColor }}
      />
      {rgbGuess && (
        <>
          <h2>your guess</h2>
          <div
            className='colour-container-inner'
            style={{ backgroundColor: rgbGuess }}
          />
        </>
      )}
    </div>
  );
}

export default ColourContainer;