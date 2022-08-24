import React, { useState } from 'react';
import RefBtn from './RefBtn';

import './styles/App.style.css';

const AppBtn = ({buttonVal, handleClick}) => {
 
  const renderClick = position => (
    <RefBtn
      value={buttonVal[position]}
      className="btn"
      onclick={() => handleClick(position)}
    />
  );
  return (
    <div className="btn-cover">
      <div className="btn-box">
        {renderClick(0)}
        {renderClick(1)}
        {renderClick(2)}
      </div>
      <div className="btn-box">
        {renderClick(3)}
        {renderClick(4)}
        {renderClick(5)}
      </div>
      <div className="btn-box">
        {renderClick(6)}
        {renderClick(7)}
        {renderClick(8)}
      </div>
    </div>
  );
};

export default AppBtn;
