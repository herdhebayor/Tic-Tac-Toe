import React, { useState } from 'react';
import RefBtn from './RefBtn';

import './styles/App.style.css';

const AppBtn = () => {
  const [buttonVal, valUpdate] = useState(Array(9).fill(null));

  // create a variable for the option of the next player
  
  const [Nextpl, updateNextpl] = useState(false)

 
  const handleClick = (position) => {
  // to disable clicking what vwe have already clicked
    if (buttonVal[position]){
      return;
    }

    
      // this is the update value function and 
      // inside it we need to pass the value that we wanted to update it with.
      // this will be the update value of the buttons

      valUpdate(
        (prev)=>{
            return (prev.map((RefBtn, pos)=>{
                if(pos === position){
                    return Nextpl ? "X" : "O";

                    // this means "if its Nextpl print X else print O"
                    // if player one has click the value will be x and next will be o
                }

                return RefBtn;
            }))
        }
    );

    updateNextpl(prev => !prev)
  };
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
