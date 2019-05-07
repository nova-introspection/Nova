import React from 'react';
import graphSetup from '../dthreeHelpers/graphSetup';
import { withRouter } from 'react-router-dom';

const Setting = (props) => {
  const { active, history } = props;
  const display = (active) ? 'is-active' : 'none';
  return (
    <div className={`dropdown ${display} is-right pointerEventsAuto`}>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p><strong style={{color:'hsl(0, 0%, 86%)', fontSize:'12px'}}>Options</strong></p>
          </div>
          <a onClick={() => { graphSetup.reset(); props.func(); }} className="dropdown-item">Recenter</a>
          <hr className="dropdown-divider"/>
          <a onClick={() => { 
            sessionStorage.removeItem('schema');
            history.push('/'); 
          }} className="dropdown-item">Home</a>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Setting);