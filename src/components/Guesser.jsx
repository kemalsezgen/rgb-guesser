import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guessColour, resetGuess, changeColour, resetGuessList } from '../stores/colour';
import { endGame, startGame } from '../stores/game';
import _ from 'lodash';

const Guesser = () => {

  const dispatch = useDispatch();
  const { color, guess } = useSelector(state => state.colour);
  const { game } = useSelector(state => state.game);

  const [rgb, setRgb] = useState({
    red: 0,
    green: 0,
    blue: 0
  })

  useEffect(() => {
    if (_.isEqual(color, guess)) {
      dispatch(endGame());
    }
  }, [guess])

  const handleNext = () => {
    dispatch(resetGuess())
    dispatch(changeColour())
    dispatch(resetGuessList())
    dispatch(startGame())
    setRgb({
      red: "0",
      green: "0",
      blue: "0"
    })
  }

  return (
    <div className='guesser-container'>
      <div className='input-group'>
        <input
          className='red-input'
          type="range"
          min="0"
          max="255"
          value={rgb.red}
          onChange={(e) => setRgb({ ...rgb, red: e.target.value })}
        />
        <input
          className='input-number'
          type="number"
          min={0}
          max={255}
          value={rgb.red}
          onChange={(e) => setRgb({ ...rgb, red: e.target.value })}
        />
      </div>
      <div className='input-group'>
        <input
          className='green-input'
          type="range"
          min="0"
          max="255"
          value={rgb.green}
          onChange={(e) => setRgb({ ...rgb, green: e.target.value })}
        />
        <input
          className='input-number'
          type="number"
          min={0}
          max={255}
          value={rgb.green}
          onChange={(e) => setRgb({ ...rgb, green: e.target.value })}
        />
      </div>
      <div className='input-group'>
        <input
          className='blue-input'
          type="range"
          min="0"
          max="255"
          value={rgb.blue}
          onChange={(e) => setRgb({ ...rgb, blue: e.target.value })}
        />
        <input
          className='input-number'
          type="number"
          min={0}
          max={255}
          value={rgb.blue}
          onChange={(e) => setRgb({ ...rgb, blue: e.target.value })}
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