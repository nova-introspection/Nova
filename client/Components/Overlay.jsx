import React from 'react';
import TopMenu from './TopMenu';
import Sidebar from './Sidebar';

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
  const {
    toggleSidebar,
    visible,
    changeType,
    currentType
  } = props;

  return (
    <div style={styles.overlay}>
      <TopMenu toggleSidebar={toggleSidebar} />
      <Sidebar
        visible={visible}
        type={currentType}
        changeType={changeType}
      />
    </div>
  );
};

export default Overlay;
