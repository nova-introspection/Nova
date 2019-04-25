import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Setting from './Setting';

const styles = {
  clickable: {
    pointerEvents: 'auto',
  },
  icon: {
    color:'smokewhite'
  },
  settings: {
    position: 'fixed',
    top: '12px',
    right: '20px',
    cursor: 'pointer',
    color: 'whitesmoke',
    pointerEvents: 'auto',
  },
  settingBox: {
    position: 'fixed',
    top: '40px',
    right: '20px',
  },
  menu: {
    position: 'fixed',
    top: '12px',
    left: '20px',
    cursor: 'pointer',
    color: 'whitesmoke',
    zIndex: '100',
    pointerEvents: 'auto',
  }
};

const TopMenu = (props) => {
  const { toggleSidebar } = props;
  const [settingsActive, useSettings] = useState(false);

  function toggleSettings() {
    useSettings(!settingsActive);
  }

  return (
    <nav>
      <div onClick={toggleSidebar} style={styles.menu}><i class="fas fa-bars"></i></div>
      <div onClick={() => toggleSettings() } style={styles.settings}><i class="fas fa-ellipsis-h"></i></div>
      <div style={styles.settingBox}>
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
