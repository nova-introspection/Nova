import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../assets/novaFullLogo';

const NoSession = ({ history }) => (
  <div className="landingContainer">
    <Logo width={200} />
    <p style={{ fontSize: '18px', margin: '20px' }}>
      Your session has ended. Please return to home page.
    </p>
    <button onClick={() => { history.push('/'); }}>Main Page</button>
  </div>
);

export default withRouter(NoSession);
