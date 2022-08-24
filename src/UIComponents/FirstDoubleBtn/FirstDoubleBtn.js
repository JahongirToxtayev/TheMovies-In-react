import React from 'react'
import "./style.css"

export const FirstDoubleBtn = ({children, ...props}) => {
  return (
    <button className=' FirstBtn' {...props}>
        {children}
    </button>
  )
}
