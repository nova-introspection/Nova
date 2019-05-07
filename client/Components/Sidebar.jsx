import React from 'react';
import {
  Menu,
  Segment,
  Sidebar,
  Icon,
} from 'semantic-ui-react';
import Field from './Field';

const styles = {
  sidebar: {
    height: '100%',
    background: 'transparent',
  },
};

const MySidebar = (props) => {
  const { visible, type, changeType } = props;
  let fields;
  if (type.fields) {
    fields = type.fields.map(currentField => (
      <Field
        key={currentField.name}
        field={currentField}
        handleClick={() => changeType(currentField.type.name)}
      />
    ));
  } else {
    fields = [];
  }

  return (
    <div className="sidebarContainer">
      <Sidebar.Pushable as={Segment} style={styles.sidebar}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="wide"
          className="pointerEventsAuto"
        >
          <Menu.Menu style={{padding:'25px 5px'}}></Menu.Menu>
          <Menu.Menu as="a" onClick={() => changeType('Root')} style={{color: '#FFF', fontSize: '19px'}}>
            { type.name }
          </Menu.Menu>
          <Menu.Item style={{fontSize: '18px', textAlign: 'left', paddingLeft: '10px', fontWeight: 'bold', color: 'hsl(204, 86%, 53%)'}}>
            Fields
          </Menu.Item>
          { fields }
        </Sidebar>
      </Sidebar.Pushable>
    </div>
  );
};

export default MySidebar;
