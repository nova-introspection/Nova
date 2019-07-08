import React from 'react';
import { WhiteLogo } from '../../assets/novaFullLogo';


export const setLinks = (name = '', styles = {}) => {
  const links = ['fa-envelope', 'fa-product-hunt', 'fa-twitter', 'fa-github'];
  const link = ['mailto:nova.introspection@gmail.com', 'https://www.producthunt.com/posts/nova-5', 'https://twitter.com/nova_introspect', 'https://github.com/nova-introspection/Nova'];
  return links.map((item, i) => {
    const icon = i === 0 ? 'fas' : 'fab';
    return (
      <div key={`${item}${i}`} className={name}>
        <a href={link[i]} style={styles}>
          <i className={`${icon} fa-lg ${item}`} />
        </a>
      </div>
    );
  });
};

const Nav = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <WhiteLogo width={90} />
        </div>
        <div className="navbar-item">
          <p style={{ color: 'turquoise' }}>
            beta
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          {setLinks('navbar-item')}
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
