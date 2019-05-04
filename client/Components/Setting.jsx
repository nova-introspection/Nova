import React from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';
import { withRouter } from 'react-router-dom';

const Setting = (props) => {
  const { active, history } = props;
  const display = (active) ? 'block' : 'none';
  return (
    <div style={{ display }} className="settingsContainer pointerEventsAuto">
      <div className="btnContainer">
        <p onClick={() => { graphSetup.reset(); props.func(); }} className="clickable settingsBtn">Recenter</p>
        <p onClick={() => { 
          sessionStorage.removeItem('schema');
          history.push('/'); 
        }} className="clickable settingsBtn">Back</p>
      </div>
    </div>
  );
};

export default withRouter(Setting);
