import React from 'react'

function Button(props) {
  const { handleClick, buttonText } = props;
  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}

export default Button;