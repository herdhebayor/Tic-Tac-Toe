import React, {useState} from 'react';
import {WinnerCalc} from './WinComb';
import AppBtn from './AppBtn';

const App= () => {
   const [buttonVal, valUpdate] = useState(Array(9).fill(null));

  // create a variable for the option of the next player
  
  const [Nextpl, updateNextpl] = useState(false);
  const winner = WinnerCalc(buttonVal);
  const message = winner ? `The winner is ${winner} `: `Next player is ${Nextpl ? "X" : "O"}`
 console.log(winner)
  const handleClick = (position) => {
  // to disable clicking what vwe have already clicked
    if (buttonVal[position] || winner){
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

  return(
  <div className="box">
    <h1 className="tittle">tic tac toe!</h1>
    <h2> {message}</h2>
    <AppBtn buttonVal={buttonVal} handleClick={handleClick} />
  </div>
);
  }
export default App