import React, { useState } from 'react';
import Nav from './LandingSections/Nav.jsx';
import Level from './LandingSections/Level.jsx';
import Footer from './LandingSections/Footer.jsx';

const Landing = (props) => {
  const [urlText, setUrlText] = useState('');

  // conditional rendering for loading/error text
  let loadingText;
  if (props.invalidSchema) {
    loadingText = <p className="invalid">Invalid GraphQL endpoint, please try again</p>;
  } else if (props.loadingState) {
    loadingText = <p className="loading">Processing GraphQL Schema...</p>;
  } else { loadingText = <br />; }
  const fetching = (props.loadingState) ? 'is-loading' : '';
  return (
    <div id="mainPage">
      <Nav/>
      <section className="hero is-dark is-mobile"> 
        <div className="hero-body">
          <div className="container">
            <div><h2 className="title">GraphQL Introspection</h2></div>
            <div>
              <div className="field" id="landingInput">
                <div className={`control ${fetching}`}>
                  <input 
                    className="input is-primary is-rounded"
                    onChange={(e) => { setUrlText(e.target.value); }}
                    onKeyDown={(e) => { props.handleUrlClick(e, urlText, props.history); }}
                    type="text" 
                    placeholder="Enter Graphql endpoint"/>
                </div>
              </div>
              {loadingText}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Level/>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
