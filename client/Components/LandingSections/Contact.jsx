import React from 'react';
import { setLinks } from './Nav';

const Contact = () => {
  const types = ['text', 'email'];
  const title = ['Name', 'Email'];
  const icon = ['fas fa-user', 'fas fa-envelope'];
  const label = types.map((item, i) => (
    <div key={`${item}${i}`} className="field">
      <div className="control has-icons-left">
        <input className="input is-info" type={item} placeholder={title[i]} />
        <span className="icon is-small is-left">
          <i className={icon[i]} />
        </span>
      </div>
    </div>
  ));

  return (
    <div className="section">
      <p className="title is-size-4">Let us know if you have any questions!</p>
      <div className="columns">
        <div className="column is-half">
          {label}
          <div className="field">
            <div className="control">
              <label className="label">Comment</label>
              <textarea className="textarea is-info" />
            </div>
          </div>
          <button
            type="button"
            style={{ margin: '0' }}
            className="button is-info is-fullwidth"
          >
              Submit
          </button>
        </div>
        <div className="column is-half">
          <div className="section">
            <nav className="level is-mobile">
              {setLinks('level-item', { color: 'hsl(0, 0%, 21%)', fontSize: '25px' })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
