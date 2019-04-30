import React, { useState } from 'react';
import Logo from '../assets/novaFullLogo.jsx';

const Landing = (props) => {
  const [urlText, setUrlText] = useState('');

  // conditional rendering for loading/error text
  let loadingText;
  if (props.invalidSchema) {
    loadingText = <p className="invalid">Invalid GraphQL endpoint, please try again</p>;
  } else if (props.loadingState) {
    loadingText = <p className="loading">Processing GraphQL Schema...</p>;
  } else { loadingText = <br />; }

  return (
    <div className="landingContainer">
      <div>
        <Logo width={300} />
      </div>
      <div>
        <input
          id="landingInput"
          onChange={(e) => { setUrlText(e.target.value); }}
          onKeyDown={(e) => { props.handleUrlClick(e, urlText, props.history); }}
          type="text"
          placeholder="enter GraphQL endpoint"
        />
        {loadingText}
      </div>
    </div>
  );
};

export default Landing;
