import React from 'react';
import { WhiteLogo } from '../../assets/novaFullLogo.jsx';

const Nav = (props) => {
  const links = ['fa-product-hunt', 'fa-twitter', 'fa-github'];
  const link = ['#', '#', 'https://github.com/nova-introspection/Nova'];
  const menu = links.map((item, i) => {
    return (
      <div key={`${item}i`} className="navbar-item">
        <a href={link[i]} target="_blank"><i className={`fab fa-lg ${item}`}></i></a>
      </div>
    )
  });
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <WhiteLogo width={90}/>
          </div>
          <div className="navbar-item"><p style={{color:'turquoise'}}>beta</p></div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {menu}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav;