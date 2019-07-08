import React from 'react';
import TopMenu from './TopMenu';
import Sidebar from './Sidebar';

const Overlay = ({
  toggleSidebar,
  colorChange,
  visible,
  changeType,
  currentType,
  root,
  data,
}) => (
  <div className="overlay">
    <TopMenu toggleSidebar={toggleSidebar} colorChange={colorChange} />
    <Sidebar
      visible={visible}
      type={currentType}
      changeType={changeType}
      root={root}
      data={data}
    />
  </div>
);

export default Overlay;
