import React from 'react';
import {
  Menu,
  Segment,
  Sidebar,
  Icon,
} from 'semantic-ui-react';
import Field from './Field';

const styles = {
  container: {
    height: 'calc(100% - 40px)',
  },
  sidebar: {
    height: '100%',
    background: 'transparent',
  },
  clickable: {
    pointerEvents: 'auto',
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
    <div style={styles.container}>
      <Sidebar.Pushable as={Segment} style={styles.sidebar}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="wide"
          style={styles.clickable}
        >
          <Menu.Item as="a" onClick={() => changeType('Query')}>
            {type.name !== 'Query' && <Icon size="mini" style={{ float: 'left' }} name="caret left" />}
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
