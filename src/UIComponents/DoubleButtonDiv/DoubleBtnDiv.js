import React from 'react'
import "./style.css"

export const DoubleBtnDiv = ({children, ...props}) => {
  return (
    
    <div className="div d-flex justify-content-around" {...props}>
    {children}
    </div>
  )
}
