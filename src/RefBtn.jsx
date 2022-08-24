import React from 'react';

const RefBtn = ({ value, onclick }) => {
  return <button onClick={onclick}> {value}</button>;
};

export default RefBtn;
