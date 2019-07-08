import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const SlideIn = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (<div style={{ ...defaultStyle, ...transitionStyles[state] }} />)}
  </Transition>
);

export default SlideIn;
