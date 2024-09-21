import React from 'react'
import './Button.scss'
export default function Button({className, children, ...props}) {
  return (
    <button className={`btn ${className}`} {...props}>{children}</button>
  )
}
