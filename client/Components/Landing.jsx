import React, { useState } from 'react';
import Logo from '../assets/novaFullLogo.jsx';

const Landing = (props) => {
  const [urlText, setUrlText] = useState('');
  return (
    <div className="landingContainer">
      <div>
        <Logo width={300}/>
      </div>
      <div>
        <input
          id="landingInput"
          onChange={(e) => { setUrlText(e.target.value); }}
          onKeyDown={(e) => { props.handleUrlClick(e, urlText, props.history) }}
          type="text"
          placeholder="enter GraphQL endpoint"
        />
      </div>
    </div>
  );
};

export default Landing;
