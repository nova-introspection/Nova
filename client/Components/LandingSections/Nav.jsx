import React from 'react';
import { WhiteLogo } from '../../assets/novaFullLogo.jsx';


export const setLinks = (name = '', styles = {}) => {
  const links = ['fa-envelope', 'fab fa-hacker-news-square','fa-product-hunt', 'fa-twitter', 'fa-github'];
  const link = ['#', '#', '#', '#', 'https://github.com/nova-introspection/Nova'];
  return links.map((item, i) => {
    const icon = i === 0 ? 'fas' : 'fab';
    return (
      <div key={`${item}${i}`} className={name}>
        <a href={link[i]} target="_blank" style={styles}><i className={`${icon} fa-lg ${item}`}></i></a>
      </div>
    )
  });
}

const Nav = (props) => {
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
            {setLinks('navbar-item')}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav;