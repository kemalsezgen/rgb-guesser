import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guessColour, resetGuess, changeColour, resetGuessList } from '../stores/colour';
import { endGame, startGame } from '../stores/game';
import _ from 'lodash';

const Guesser = () => {

  const dispatch = useDispatch();
  const { color, guess, guessList } = useSelector(state => state.colour);
  const { game } = useSelector(state => state.game);

  const [rgb, setRgb] = useState({
    red: 0,
    green: 0,
    blue: 0
  });

  useEffect(() => {
    console.log("color:", color);
    console.log("guess:", guess);
    if (guess.percentage === 100 || guessList.length === 10) {
      dispatch(endGame());
    }
  }, [guess, dispatch, color, guessList]);

  const handleNext = () => {
    dispatch(resetGuess());
    dispatch(changeColour());
    dispatch(resetGuessList());
    dispatch(startGame());
    setRgb({
      red: 0,
      green: 0,
      blue: 0
    });
  }

  const handleInputChange = (e, color) => {
    let value = e.target.value;

    value = value.replace(/^0+/, '');

    if (value > 255) {
      value = 255;
    } else if (value < 0) {
      value = 0;
    }

    setRgb({ ...rgb, [color]: Number(value) });
  };

  return (
    <div className='guesser-container'>
      <div className='input-group'>
        <input
          className='red-input'
          type="range"
          min="0"
          max="255"
          value={rgb.red}
          onChange={(e) => handleInputChange(e, 'red')}
        />
        <input
          className='input-number'
          type="number"
          min={0}
          max={255}
          value={rgb.red}
          onChange={(e) => handleInputChange(e, 'red')}
        />
      </div>
      <div className='input-group'>
        <input
          className='green-input'
          type="range"
          min="0"
          max="255"
          value={rgb.green}
          onChange={(e) => handleInputChange(e, 'green')}
        />
        <input
          className='input-number'
          type="number"
          min={0}
          max={255}
          value={rgb.green}
          onChange={(e) => handleInputChange(e, 'green')}
        />
      </div>
      <div className='input-group'>
        <input
          className='blue-input'
          type="range"
          min="0"
          max="255"
          value={rgb.blue}
          onChange={(e) => handleInputChange(e, 'blue')}
        />
        <input
          className='input-number'
          type="number"
          min={0}
          max={255}
          value={rgb.blue}
          onChange={(e) => handleInputChange(e, 'blue')}
        />
      </div>
      <button className='btn guess-button' disabled={game.isFinished}
        onClick={() => dispatch(guessColour(rgb))}>guess</button>
      {guess &&
        <button className={`btn next-button`} onClick={handleNext}>
          next
        </button>}
    </div>
  );
}

export default Guesser;