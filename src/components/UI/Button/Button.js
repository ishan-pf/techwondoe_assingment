import React from 'react'

const Button = (props) => {

    const mybtn = `button ${props.className}`

  return (
    <button 
    className={mybtn} 
    onClick={props.handleClick}> 
        {props.children}
    </button>
  )
}

export default Button