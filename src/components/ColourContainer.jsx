import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColour, resetColour } from '../stores/colour';

const ColourContainer = () => {
  const dispatch = useDispatch();
  const { color, guess } = useSelector(state => state.colour);

  const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  const rgbGuess = guess ? `rgb(${guess.red}, ${guess.green}, ${guess.blue})` : ``;

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
      <div className='buttons'>
        { /* <button className='btn' onClick={() => dispatch(resetColour())}>Reset</button> */}
        { /* <button className='btn' onClick={() => dispatch(changeColour())}>Change Colour</button> */}
      </div>
    </div>
  );
}

export default ColourContainer;