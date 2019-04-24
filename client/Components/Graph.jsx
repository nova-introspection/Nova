import React, { useState, useEffect } from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';

const Graph = (props) => {
  const { handleClick, data } = props;
  const [width, changeWidth] = useState(window.innerWidth);
  const [height, changeHeight] = useState(window.innerHeight);
  useEffect(() => { graphSetup.setup(data, handleClick); }, data);
  useEffect(() => {
    window.addEventListener('resize', () => {
      changeWidth(window.innerWidth);
      changeHeight(window.innerHeight);
    });
  }, [width, height]);
  return <svg id="graph" width={width} height={height} />;
};

export default Graph;
