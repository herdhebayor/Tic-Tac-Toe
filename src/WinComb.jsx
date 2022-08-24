export function WinnerCalc  (buttonVal)  {
 const lines= [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    [2,5,8]
 ];
 for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(buttonVal[a] && buttonVal[a] === buttonVal[b]&& buttonVal[a] === buttonVal[c]){
       return buttonVal[a];
    }
 }
 return null;
}

