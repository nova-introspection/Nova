import React, { useState } from 'react';
import Setting from './Setting';

const TopMenu = ({ toggleSidebar, colorChange }) => {
  const [settingsActive, useSettings] = useState(false);

  function toggleSettings() {
    useSettings(!settingsActive);
  }
  const active = (settingsActive) ? 'activeColor' : '';
  return (
    <nav>
      <div
        onClick={toggleSidebar}
        className={`whitesmoke fixed clickable menu pointerEventsAuto icon ${colorChange}`}
      >
        <i className="fas fa-grip-lines fa-lg" />
      </div>
      <div
        onClick={() => toggleSettings()}
        className={`whitesmoke fixed clickable options pointerEventsAuto icon ${active}`}
      >
        <i className="fas fa-ellipsis-h fa-lg" />
      </div>
      <div className="optionsBox fixed">
        <Setting active={settingsActive} func={toggleSettings} />
      </div>
    </nav>
  );
};

export default TopMenu;
