import React from 'react';
import {
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import Field from './Field';

const styles = {
  sidebar: {
    height: '100%',
    background: 'transparent',
  },
};

const MySidebar = (props) => {
  const { visible, type, changeType, root } = props;
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
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="wide"
      className="pointerEventsAuto"
      style={{
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
        <div onClick={() => changeType(root)} style={{height: '80px', color: '#FFF', fontSize: '19px', padding: '40px 0px' }}>
          { type.name }
        </div>
        {/* <Menu.Item style={{ fontSize: '18px', textAlign: 'left', paddingLeft: '10px', fontWeight: 'bold', color: 'hsl(204, 86%, 53%)', marginIop: '100px' }}>
          Fields
        </Menu.Item> */}
        <div style={{ height: '60px', fontSize: '18px', textAlign: 'left', padding: '20px', fontWeight: 'bold', color: 'hsl(204, 86%, 53%)', marginIop: '100px', borderBottom: 'solid 1px #2a2a2a'}} >
          Fields
        </div>
        <div style={{flexGrow: 4, overflow: 'auto'}}>
          { fields }  
        </div>
      </div>
      {/* <div style={{ height: '100%' }}> */}
        {/* { fields } */}
      {/* </div> */}
    </Sidebar>
  );
};

export default MySidebar;
