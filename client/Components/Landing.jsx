import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  description: {
    width: '50vw',
  },
};

const Landing = (props) => {
  const [urlText, setUrlText] = useState('');
  return (
    <div style={styles.container}>
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
        />
        <button
          type="button"
          onClick={() => {
            props.handleUrlClick(urlText);
            props.history.push('/visualizer');
          }}
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default Landing;
