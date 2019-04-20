import React, { useState, useEffect } from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';

const Graph = (props) => {
  const [width, changeWidth] = useState(window.innerWidth);
  const [height, changeHeight] = useState(window.innerHeight);
  useEffect(() => { graphSetup.setup(props.data); }, props.data);
  useEffect(() => {
    window.addEventListener('resize', () => {
      changeWidth(window.innerWidth);
      changeHeight(window.innerHeight);
    });
  }, [width, height]);
  return (
    <div>
      <button
        type="button"
        onClick={graphSetup.reset}
        style={{ position: 'fixed' }}
      >
        reset
      </button>
      <svg id="graph" width={width} height={height} />
    </div>
  );
};

export default Graph;
