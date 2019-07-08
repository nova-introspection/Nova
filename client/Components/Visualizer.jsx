import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Overlay from './Overlay';
import Graph from './Graph';
import NoSession from './NoSession';

const Visualizer = ({ schemaGraph, location }) => {
  if (sessionStorage.getItem('schema') === null) { return <NoSession />; }
  const rootName = schemaGraph.nodes[0].name;
  const { nodes } = schemaGraph;
  const [sidebarActive, useSidebar] = useState(false);
  const [currentType, useCurrentType] = useState(nodes[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.querySelector('body');
    body.classList.add('hid');
    return () => body.classList.remove('hid');
  }, location.pathname);

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

  const styles = {
    background: '#212121',
    width: '100vw',
    height: '100vh',
    display: 'flex',
  };

  const active = (sidebarActive) ? 'activeColor' : '';
  return (
    <div style={styles}>
      <Overlay
        toggleSidebar={toggleSidebar}
        colorChange={active}
        visible={sidebarActive}
        changeType={changeType}
        currentType={currentType}
        root={rootName}
        data={schemaGraph}
      />
      <Graph data={schemaGraph} handleClick={changeType} />
    </div>
  );
};

export default withRouter(Visualizer);
