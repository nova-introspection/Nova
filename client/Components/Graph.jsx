import React, { useState, useEffect } from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';

const Graph = (props) => {
  const { handleClick, data } = props;
  const [width, changeWidth] = useState(window.innerWidth);
  const [height, changeHeight] = useState(window.innerHeight);
  data.nodes.forEach(item => { item.radius = item.name.length * 4.4 + 25; });
  useEffect(() => { graphSetup.setup(data, handleClick); }, data);
  useEffect(() => {
    const wind = () => {
      changeWidth(window.innerWidth);
      changeHeight(window.innerHeight);
    }; window.addEventListener('resize', wind);
    return () => window.removeEventListener('resize', wind);
  }, [width, height]);
  return (
    <svg id="graph" width={width} height={height}>
      <rect width="100%" height="100%" fill="#212121"></rect>
      <g className="everything">
        <defs>
          <marker id="end-arrow" viewBox="0 -5 10 10" refX="10" refY="0" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,-5L10,0L0,5" style={{fill: 'whitesmoke'}}/>
          </marker>
        </defs>
      </g>
    </svg>
  );
};

export default Graph;