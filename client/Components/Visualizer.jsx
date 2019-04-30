import React, { useState } from 'react';
import Overlay from './Overlay';
import Graph from './Graph';
import NoSession from './NoSession';

const Visualizer = (props) => {
  if(sessionStorage.getItem('schema') === null) { return <NoSession/> }
  const { schemaGraph } = props; // can be updated to props destructuring
  const { nodes } = schemaGraph;
  const [sidebarActive, useSidebar] = useState(false);
  const [currentType, useCurrentType] = useState(nodes[0]);

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

  const active = (sidebarActive) ? 'activeColor' : '';
  return (
    <div>
      <Overlay
        toggleSidebar={toggleSidebar}
        colorChange={active}
        visible={sidebarActive}
        changeType={changeType}
        currentType={currentType}
      />
      <Graph data={schemaGraph} handleClick={changeType} />
    </div>
  );
};

export default Visualizer;