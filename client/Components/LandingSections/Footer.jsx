import React from 'react';
import { setLinks } from './Nav';

const Footer = () => (
  <footer className="footer notification is-white">
    <div className="container">
      <div className="content">
        <div className="level is-mobile" style={{ width: '33%' }}>
          {setLinks('level-item', { fontSize: '20px', color: 'hsl(0, 0%, 21%)' })}
        </div>
      </div>
    </div>
  </footer>
);


export default Footer;
