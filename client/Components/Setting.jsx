import React from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';

const Setting = (props) => {
  const { active } = props;
  const display = (active) ? 'block' : 'none';
  return (
    <div style={{ display }} className="settingsContainer pointerEventsAuto">
      <div className="btnContainer">
        <p onClick={() => {graphSetup.reset(); props.func()}} className="clickable settingsBtn">reset</p>
      </div>
    </div>
  );
};

export default Setting;
