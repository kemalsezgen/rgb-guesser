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
              style={{ backgroundColor: `rgb(${prediction.red}, ${prediction.green}, ${prediction.blue})` }}
              key={`rgb(${prediction.red}, ${prediction.green}, ${prediction.blue})`}
            />
          )
        })}
      </div>
      {game.isFinished === true && (<p>{`You figured it out in ${guessList.length} ${guessList.length > 1 ? 'tries!' : 'try!'}`}</p>)}
    </div>
  )
}

export default Predictions