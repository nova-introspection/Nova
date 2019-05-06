import React from 'react';

const Examples = (props) => {
  const list = ['first', 'second', 'third', 'fourth'];
  const colors = ['is-light', 'is-warning', 'is-info', 'is-primary', 'is-link']
  const display = list.map((item, i) => {
    return (
      <div key={`${item}${i}`} className="tile is-parent">
        <div className={`tile is-child box notification button ${colors[i]}`}>
          <p className="title is-5">{item}</p>
        </div>
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