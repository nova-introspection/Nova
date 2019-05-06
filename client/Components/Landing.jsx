import React, { useState } from 'react';
import Nav from './LandingSections/Nav.jsx';
import Level from './LandingSections/Level.jsx';
import Examples from './LandingSections/Examples.jsx';
import Description from './LandingSections/Description.jsx';
import Contact from './LandingSections/Contact.jsx';
import Footer from './LandingSections/Footer.jsx';

const Landing = (props) => {
  const [urlText, setUrlText] = useState('');

  // conditional rendering for loading/error text
  let loadingText;
  if (props.invalidSchema) {
    loadingText = <p className="is-size-5 has-text-danger">Invalid GraphQL endpoint, please try again</p>;
  } else if (props.loadingState) {
    loadingText = <p className="is-size-5 has-text-primary">Processing GraphQL Schema...</p>;
  } else { loadingText = <p className="is-size-5 has-text-dark"><i className="fas fa-star"></i></p>; }
  const fetching = (props.loadingState && !props.invalidSchema) ? 'is-loading' : '';
  return (
    <div>
      <Nav/>
      <section className="hero is-dark is-fullheight-with-navbar is-mobile"> 
        <div className="hero-body">
          <div className="container">
            <div>
              <h2 id="introspect" className="title">
                <i style={{color:'turquoise'}} className="fas fa-arrow-alt-circle-down"></i> Introspect an endpoint!
              </h2>
            </div>
            <div>
              <div className="field" id="landingInput">
                <div className={`control has-icons-left ${fetching}`}>
                  <input 
                    className="input is-primary is-rounded"
                    onChange={(e) => { setUrlText(e.target.value); }}
                    onKeyDown={(e) => { props.handleUrlClick(e, urlText, props.history); }}
                    type="text" 
                    placeholder="Enter Graphql endpoint"/>
                    <span className="icon is-small is-left">
                      <i className="fas fa-project-diagram"></i>
                    </span>
                </div>
              </div>
              {loadingText}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Description/>
        <div className="is-divider"></div>
        <Examples history={props.history} handleUrlClick={props.handleUrlClick}/>
        <div className="is-divider"></div>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
