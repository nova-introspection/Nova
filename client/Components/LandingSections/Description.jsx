import React from 'react';
import Level from './Level.jsx';

const Description = (props) => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <p className="title is-4">What is Nova?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident fugit blanditiis corporis, odit eum id beatae reiciendis vero laborum maxime assumenda modi voluptatibus quam tenetur atque minima iste nam.</p>
        </div>
        <div className="column is-two-fifths notification is-dark">
          <Level/>
        </div>
      </div>
    </div>
  )
}

export default Description;