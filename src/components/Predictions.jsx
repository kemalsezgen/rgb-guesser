import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectGuess } from '../stores/colour';

const Predictions = () => {
  const dispatch = useDispatch();
  const { guessList } = useSelector(state => state.colour);
  const { game } = useSelector(state => state.game);

  const calculateTextColor = ({ red, green, blue }) => {
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return brightness < 128 ? '#FFFFFF' : '#000000';
  };

  const handlePredictionClick = (prediction) => {
    dispatch(selectGuess(prediction.data));
  };

  return (
    <div className='predictions-container'>
      {10 - guessList.length > 0 ? (
        <h2>
          You have {10 - guessList.length} {10 - guessList.length > 1 ? 'chances' : 'chance'}
        </h2>
      ) : (
        <>
          {game.isFinished && guessList.some(guess => guess.percentage === 100) && (
            <h2>
              {`You figured it out in ${guessList.length} ${guessList.length > 1 ? 'tries' : 'try'}!`}
            </h2>
          )}

          {game.isFinished && !guessList.some(guess => guess.percentage === 100) && (
            <h2>
              {`Your best score is ${guessList.reduce((max, obj) =>
                obj.percentage > max.percentage ? obj : max, guessList[0]).percentage}%.`}
            </h2>
          )}
        </>
      )}
      <div className='predictions-container-inner'>
        {guessList.map(prediction => {
          const rgbColor = `rgb(${prediction.data.red}, ${prediction.data.green}, ${prediction.data.blue})`;
          const textColor = calculateTextColor(prediction.data);

          return (
            <div
              className='prediction-box'
              style={{ backgroundColor: rgbColor, color: textColor }}
              key={`rgb(${prediction.data.red}, ${prediction.data.green}, ${prediction.data.blue})`}
              onClick={() => handlePredictionClick(prediction)}
            >
              <p>{prediction.percentage}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Predictions;