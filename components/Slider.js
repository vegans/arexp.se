import React from 'react'
import uuidv4 from 'uuid/v4'

export default function Slider({value, children, onInputChange, ...props}) {
  const id = uuidv4()
  return (
    <>
      <label htmlFor={id}>
        {children} ({value})
      </label>
      <input
        id={id}
        className="custom-range"
        type="range"
        {...props}
        value={value}
        onChange={event => onInputChange(event.target.value)}
      />
    </>
  )
}
