import React from 'react';
import Graph from './Graph';
import data from '../dummyData';

const Visualizer = () => {
  return (
    <div>
      <Graph data={data}/>
    </div>
  )
}

export default Visualizer;