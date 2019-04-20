import React from 'react';
import Overlay from './Overlay';
import Graph from './Graph';
import data from '../dummyData';

const Visualizer = () => (
  <div>
    <Overlay />
    <Graph data={data} />
  </div>
);

export default Visualizer;
