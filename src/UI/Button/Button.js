import React from 'react';
import './styles.scss';

const Button = ({ 
  children, 
  handleClick, 
  type="button", 
  classes="",
}) => {
  return (
    <button 
      className={`button ${classes}`} 
      onClick={handleClick}
      type={type}
    >
      { children }
    </button>
  )
}
  

export default Button;