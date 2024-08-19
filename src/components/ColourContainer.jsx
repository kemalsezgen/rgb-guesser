import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColour, resetColour } from '../stores/colour';

const ColourContainer = () => {
  const dispatch = useDispatch();
  const { color } = useSelector(state => state.colour);

  const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { red: r, green: g, blue: b };
  }

  return (
    <div className='colour-container'>
      <div
        className='colour-container-inner'
        style={{ backgroundColor: rgbColor }}
      >
      </div>
      <div className='buttons'>
        <button className='btn' onClick={() => dispatch(resetColour())}>Reset</button>
        <button className='btn' onClick={() => dispatch(changeColour(getRandomRGB()))}>Change Colour</button>
      </div>
    </div>
  );
}

export default ColourContainer;