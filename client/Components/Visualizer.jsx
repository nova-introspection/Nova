import React, { useState } from 'react';
import Overlay from './Overlay';
import Graph from './Graph';
import mockData from './mockData';

const Visualizer = (props) => {
  const { schemaGraph } = props; // can be updated to props destructuring
  const { nodes } = schemaGraph;
  const [sidebarActive, useSidebar] = useState(false);
  const [currentType, useCurrentType] = useState(nodes[0]);
  // const g = props.schemaGraph;
  // const [sidebarActive, usesidebar] = useState(false);
  // const [currentType, useCurrentType] = useState(g.nodes[0]);
  // const [map, useMap] = useState(new Map());

  // useEffect(() => {
  //   console.log('use effect: ', props)
  //   // Add api call
  //   const { nodes } = g;
  //   const newMap = new Map();
  //   for (let i = 0; i < nodes.length; i += 1) {
  //     const type = props.schemaGraph.nodes[i];
  //     newMap.set(type.name, type);
  //   }
  //   console.log(props);
  //   // Not sure if there is a way to update map and selected type at once
  //   useMap(newMap);
  //   // Not sure if its always query
  //   useCurrentType(newMap.get('Query'));
  // }, map);

  function toggleSidebar() {
    useSidebar(!sidebarActive);
  }

  function changeType(typeName) {
    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].name === typeName) {
        useCurrentType(nodes[i]);
        useSidebar(true);
        break;
      }
    }
  }

  return (
    <div>
      <Overlay
        toggleSidebar={toggleSidebar}
        visible={sidebarActive}
        changeType={changeType}
        currentType={currentType}
      />
      <Graph data={schemaGraph} handleClick={changeType} />
    </div>
  );
};

export default Visualizer;
