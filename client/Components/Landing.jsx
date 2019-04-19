import React, { useState, useEffect } from 'react';
// import { url } from 'inspector';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    // background: 'url("https://www.iliketowastemytime.com/sites/default/files/night-sky-hd-wallpaper.jpg")',
    // backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // color: '#FFF',
  },
  description: {
    width: '50vw',
  }
}


const Landing = (props) => {
  const [urlText, setUrlText] = useState("");
  return (
    <div style={styles.container}>
      <div>
        <h1>Nova</h1>
      </div>
      <div>
        <input onChange={(e) => {
          setUrlText(e.target.value)
        }} type="text" placeholder="Enter Graphql endpoint" />
        <button onClick={ () => {
          props.handleUrlClick(urlText);
          }}>Let's go</button>
      </div>
    </div>
  );
}

export default Landing;