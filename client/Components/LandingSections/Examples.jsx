import React, { useState, useEffect } from 'react';
import LoadingModal from './LoadingModal.jsx';

const Examples = (props) => {
  const [active, changeActive] = useState('');
  useEffect(() => changeActive(''), []);
  const list = ['Pokemon', 'Countries', 'Swapi', 'Catalysis Hub'];
  const colors = ['is-primary', 'is-warning', 'is-info', 'is-light', 'is-dark'];
  const demoLinks = [];
  demoLinks[0] = 'https://pokeapi-graphiql.herokuapp.com/';
  demoLinks[1] = 'https://countries.trevorblades.com/';
  demoLinks[2] = 'https://swapi.apis.guru';
  demoLinks[3] = 'http://api.catalysis-hub.org/graphql';
  const display = list.map((item, i) => {
    return (
      <div key={`${item}${i}`} className="tile is-parent">
        <div 
          className={`tile is-child box notification button ${colors[i]}`}
          onClick={(e) => {
            changeActive('is-active');
            props.handleUrlClick(demoLinks[i], props.history, {button: true})
          }}
        >
          <p className="title is-5">{item}</p>
        </div>
        <LoadingModal isActive={active}/>
      </div>
    )
  });
  return (
    <section className="section">
      <p className="title is-4">Demo</p>
      <div className="tile is-ancestor">
        {display}
      </div>
    </section>
  )
}

export default Examples;