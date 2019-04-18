import React, { useState, useEffect } from 'react';

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

const Landing = () => {
  return (
    <div style={styles.container}>
      <div>
        <h1>Nova</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter Graphql endpoint" />
        <button>Let's go</button>
      </div>
    </div>
  );
}

export default Landing;