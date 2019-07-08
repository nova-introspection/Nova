import React from 'react';
import { withRouter } from 'react-router-dom';
import graphSetup from '../dthreeHelpers/graphSetup';
import { color } from '../dthreeHelpers/graphFunctions';

const styling = {
  color: 'hsl(0, 0%, 86%)',
  fontSize: '12px',
};

const Setting = ({ active, history, func }) => {
  const display = (active) ? 'is-active' : 'none';
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => {
    const des = (i === 0) ? ' - Root' : ` - Level ${num} out`;
    return (
      <div key={`colorScheme${num}${i}`} className="dropdown-item">
        <div className="colorScheme">
          <div style={{ background: color(num) }} />
          {des}
        </div>
      </div>
    );
  });
  return (
    <div className={`dropdown ${display} is-right pointerEventsAuto`}>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p><strong style={styling}>Levels</strong></p>
          </div>
          {levels}
          <hr className="dropdown-divider" />
          <div className="dropdown-item">
            <p><strong style={styling}>Options</strong></p>
          </div>
          <a onClick={() => { graphSetup.reset(); func(); }} className="dropdown-item">
            Recenter
          </a>
          <hr className="dropdown-divider"/>
          <a
            onClick={() => {
              sessionStorage.removeItem('schema');
              history.push('/');
            }}
            className="dropdown-item"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Setting);
