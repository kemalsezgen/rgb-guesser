import React, { useState } from 'react';

const Guesser = () => {

  const [rgb, setRgb] = useState({
    red: 0,
    green: 0,
    blue: 0
  })

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
    </div>
  );
}

export default Guesser;