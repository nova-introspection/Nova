import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';
import Graph from './Graph';
import data from '../dummyData';
import mockData from './mockData';

const Visualizer = () => {
  const g = mockData;
  const [sidebarActive, usesidebar] = useState(false);
  const [currentType, useCurrentType] = useState(g.nodes[0]);
  const [map, useMap] = useState(new Map());

  useEffect(() => {
    // Add api call
    const { nodes } = g;
    const newMap = new Map();
    for (let i = 0; i < nodes.length; i += 1) {
      const type = mockData.nodes[i];
      newMap.set(type.name, type);
    }

    // Not sure if there is a way to update map and selected type at once
    useMap(newMap);
    // Not sure if its always query
    useCurrentType(newMap.get('Query'));
  }, map);

  function toggleSidebar() {
    usesidebar(!sidebarActive);
  }

  function changeType(typeName) {
    const type = map.get(typeName);
    if (type) useCurrentType(type);
  }

  return (
    <div>
      <Overlay
        toggleSidebar={toggleSidebar}
        visible={sidebarActive}
        changeType={changeType}
        currentType={currentType}
      />
      <Graph data={g} changeType={changeType} />
    </div>
  );
};

export default Visualizer;
