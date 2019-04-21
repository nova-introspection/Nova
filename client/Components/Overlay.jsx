import React, { useState, useEffect } from 'react';
import TopMenu from './TopMenu';
import Sidebar from './Sidebar';
import mockData from './mockData';

const styles = {
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
};

const Overlay = (props) => {
  // Probably gonna have to move states up to visualizer
  const [sidebarActive, useSideBar] = useState(false);
  const [selectedType, useSelectedType] = useState({
    kind: 'OBJECT',
    name: 'Root',
    description: '',
    fields: [],
  });
  const [map, useMap] = useState(new Map());

  useEffect(() => {
    const newMap = new Map();
    for (let i = 0; i < mockData.length; i += 1) {
      const type = mockData[i];
      newMap.set(type.name, type);
    }

    // Not sure if there is a way to update map and selected type at once
    useMap(newMap);
    // Not sure if its always query
    useSelectedType(newMap.get('Query'));
  }, map);

  function toggleSidebar() {
    useSideBar(!sidebarActive);
  }

  function changeType(typeName) {
    const type = map.get(typeName);
    if (type) useSelectedType(type);
  }

  return (
    <div style={styles.overlay}>
      <TopMenu toggleSidebar={toggleSidebar} />
      <Sidebar
        visible={sidebarActive}
        type={selectedType}
        changeType={changeType}
        useSideBar={useSideBar}
      />
    </div>
  );
};

export default Overlay;
