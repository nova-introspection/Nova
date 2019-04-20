import React, { useState } from 'react';
import Overlay from './Overlay';

const Visualizer = () => {
  const [counter, useCounter] = useState(0);
  return (
    <div>
      <Overlay />
      <br />
      <br />
      <br />
      <br />
      <br />
        Clicked through overlay {counter} times!
      <button type="button" onClick={() => { useCounter(counter + 1); }}>
        Click me!
      </button>
    </div>
  );
};

export default Visualizer;
