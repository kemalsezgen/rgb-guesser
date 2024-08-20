import React from 'react'
import { useSelector } from 'react-redux'

const Predictions = () => {

  const { guessList } = useSelector(state => state.colour);
  const { game } = useSelector(state => state.game);

  return (
    <div className='predictions-container'>
      <h2>your predictions ({guessList.length})</h2>
      <div className='predictions-container-inner'>
        {guessList.map(prediction => {
          return (
            <div
              className='prediction-box'
              style={{ backgroundColor: `rgb(${prediction.data.red}, ${prediction.data.green}, ${prediction.data.blue})` }}
              key={`rgb(${prediction.data.red}, ${prediction.data.green}, ${prediction.data.blue})`}
            >
              <p>{prediction.percentage}</p>
            </div>
          )
        })}
      </div>
      {game.isFinished === true && guessList.some(guess => guess.percentage === 100) &&
        (<p>{`You figured it out in ${guessList.length} ${guessList.length > 1 ? 'tries!' : 'try!'}`}</p>)}
      {game.isFinished === true && !guessList.some(guess => guess.percentage === 100) &&
        (<p>{`Your best score is ${guessList.reduce((max, obj) => obj.percentage > max.percentage ? obj : max, guessList[0]).percentage}%.`}</p>)}
    </div>
  )
}

export default Predictions