import React from 'react';
import './styles.scss';

const TitleH1 = (children, classes, handleClick)=> (
  <h1 
    className={classes}
    onClick={handleClick}
  >
    { children }
  </h1>
)

const TitleH2 = (children, classes, handleClick)=> (
  <h2 
    className={classes}
    onClick={handleClick}
  >
    { children }
  </h2>
)

const TitleH3 = (children, classes, handleClick)=> (
  <h3 
    className={classes}
    onClick={handleClick}
  >
    { children }
  </h3>
)

const Title = ({ 
  children, 
  handleClick, 
  classes="h2 ",
  level="h2"
}) => {
  
  switch (level) {
    case 'h1':
      return TitleH1(children, classes, handleClick)
    case 'h2':
      return TitleH2(children, classes, handleClick)
    case 'h3':
      return TitleH3(children, classes, handleClick)
    default:
      return TitleH2(children, classes, handleClick)

  }
}
  

export default Title;