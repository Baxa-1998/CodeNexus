import React from 'react'
import './Title.scss'
export default function Title({children, className, ...props}) {
  return (
    <div className={`title ${className}`} {...props}>{children}</div>
  )
}
