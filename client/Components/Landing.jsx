import React, { useState, useEffect } from 'react';

const Landing = (props) => {
  const [urlText, setUrlText] = useState('');
  return (
    <div className="landingContainer">
      <div>
        <h1>Nova</h1>
      </div>
      <div>
        <input
          onChange={(e) => {
            setUrlText(e.target.value);
          }}
          type="text"
          placeholder="Enter Graphql endpoint"
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              props.handleUrlClick(urlText, props.history);
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            props.handleUrlClick(urlText, props.history);
          }}
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default Landing;
