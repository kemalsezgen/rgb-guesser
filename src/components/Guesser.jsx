import React from 'react';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Guesser = () => {
  return (
    <div className='guesser-container'>
      <div className="title">Single Thumb</div>
      <RangeSlider
        className="single-thumb"
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
      />
    </div>
  );
}

export default Guesser;