import React from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';

const styles = {
  container: {
    width: '100px',
    height: '100px',
    pointerEvents: 'auto',
    background: 'lightgray',
    borderRadius: '5px'
  },
};

const Setting = (props) => {
  const { active } = props;
  let display;
  if (active) {
    display = 'block';
  } else {
    display = 'none';
  }
  return (
    <div style={{ ...styles.container, display }}>
      <button onClick={() => {graphSetup.reset(); props.func()}}>reset</button>
    </div>
  );
};

export default Setting;
