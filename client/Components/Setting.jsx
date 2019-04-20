import React from 'react';

const styles = {
  container: {
    width: '100px',
    height: '100px',
    border: 'solid black 1px',
    pointerEvents: 'auto',
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
      Hello World
    </div>
  );
};

export default Setting;
