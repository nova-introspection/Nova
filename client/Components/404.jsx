import React from 'react';
import Logo from '../assets/novaFullLogo';

const notFound = () => (
  <div className="landingContainer">
    <Logo width={200} />
    <p style={{ fontSize: '18px', margin: '20px' }}>
      The Page You Are Looking For Does Not Exist
    </p>
  </div>
);

export default notFound;
