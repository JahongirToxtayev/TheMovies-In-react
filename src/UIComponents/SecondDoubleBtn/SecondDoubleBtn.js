import React from 'react'
import "./style.css"


export const SecondDoubleBtn = ({children, ...props}) => {
  return (
    <button className='SecondBtn' {...props} >
        {children}
    </button>
    )
}
