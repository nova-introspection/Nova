import React from 'react';

const Level = (props) => {
  const stackPic = [];
  const stackName = ['React', 'D3', 'Node', 'Redis'];
  stackPic[0] = `https://cdn-images-1.medium.com/max/1600/1*14P21AcmS45PUg6g7zyyQA.png`;
  stackPic[1] = `https://raw.githubusercontent.com/d3/d3-logo/master/d3.png`;
  stackPic[2] = `https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png`;
  stackPic[3] = `https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png`;
  const width = 50;
  const tech = stackName.map((item, i) => (
    <div key={`${item}${i}`} className="level-item has-text-centered">
      <div>
        <p className="heading">{item}</p>
        <p className="title"><img src={stackPic[i]} alt={item} width={width}/></p>
      </div>
    </div>
  ))
  return (
    <div className="section">
      <nav className="level is-mobile">
        {tech}
      </nav>
    </div>
  )
}

export default Level;