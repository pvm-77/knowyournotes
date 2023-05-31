import React from 'react'
import './button.css'
const Button = ({btnLabel}) => {
  return (
    <button className='btn'>
    <div className='btn-text-wrapper-primary'>
        <span className='btn-text btn-text-primary'>{btnLabel}</span>
    </div>
    </button>
  )
}

export default Button