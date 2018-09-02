import React, { Component } from 'react';

const objToClassString = obj => {
  const classList = [];
  for(let className in obj){
    if(obj[className])
      classList.push(className);
  }
  return classList.join(' ');
}

class Image extends Component {
  render() {
    const { src, alt, isRound, isCentered, width, height } = this.props;
    const classConfig = {
     'is-rounded': isRound,
     'is-horizontal-center': isCentered
    };
    const styleConfig = {
      width: `${width}px`,
      height: `${height}px`
    }
    return (
      <figure className='image'>
        <img
          src={src}
          alt={alt || 'no description'}
          className={objToClassString(classConfig)}
          style={styleConfig}
        />
      </figure>
    );
  }
}

export default Image;
