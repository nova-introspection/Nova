import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const SlideIn = ({ in: inProp }) => {
  // console.log(props);
  // const { description } = props;
  console.log('Im in', inProp);
  return (
    <Transition in={inProp} timeout={duration}>
      {state => {
        console.log(state)
        return (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
        Im in 
        </div>)
      }}
    </Transition>
  );
};

export default SlideIn;
