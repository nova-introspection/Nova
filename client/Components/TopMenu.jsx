import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Setting from './Setting';

const styles = {
  clickable: {
    pointerEvents: 'auto',
  },
  settings: {
    position: 'fixed',
    top: '50px',
    right: '10px',
  },
};

const TopMenu = (props) => {
  const { toggleSidebar } = props;
  const [settingsActive, useSettings] = useState(false);

  function toggleSettings() {
    useSettings(!settingsActive);
  }

  return (
    <nav>
      <Menu attached="top" inverted style={{borderRadius: '0'}}>
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
      </div>
    </nav>
  );
};

export default TopMenu;
