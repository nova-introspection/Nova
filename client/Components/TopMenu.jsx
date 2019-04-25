import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Setting from './Setting';

const TopMenu = (props) => {
  const { toggleSidebar, colorChange } = props;
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
        <i className="fas fa-grip-lines fa-lg"></i>
      </div>
      <div 
        onClick={() => toggleSettings() } 
        className={`whitesmoke fixed clickable options pointerEventsAuto icon ${active}`}
      >
        <i className="fas fa-ellipsis-h fa-lg"></i>
      </div>
      <div className="optionsBox fixed">
        <Setting active={settingsActive} func={toggleSettings}/>
      </div>
      {/* <Menu attached="top" inverted style={{borderRadius: '0'}}>
        <Menu.Item onClick={toggleSidebar} style={styles.clickable}>
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => toggleSettings()} style={styles.clickable}>
            <Icon name="ellipsis horizontal" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div style={styles.settings}>
        <Setting active={settingsActive} func={toggleSettings}/>
      </div> */}
    </nav>
  );
};

export default TopMenu;
