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
          <Menu.Menu style={{padding:'15px 0'}}>Schema</Menu.Menu>
          <Menu.Item as="a" onClick={() => changeType('Query')}>
            { type.name }
          </Menu.Item>
          <Menu.Item>
            Fields
          </Menu.Item>
          { fields }
        </Sidebar>
      </Sidebar.Pushable>
    </div>
  );
};

export default MySidebar;
