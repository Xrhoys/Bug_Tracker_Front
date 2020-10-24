import React, { useState } from 'react'

export default function Checkbox(props) {
  const { value, onChange } = props
  const [hover, setHover] = useState(false)
  const style = {
    height: 16,
    width: 16,
    borderRadius: 5,
    borderColor: '#C9C9C9',
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: hover && '0px 0px 2px 2px #011F3B10',
    overflow: 'hidden',
  }

  const contentStyle = {
    height: 14,
    width: 14,
    marginTop: 1,
    marginLeft: 1,
    backgroundColor: '#5e81f4',
    borderRadius: 4,
  }

  const onMouseEnter = () => setHover(true)

  const onMouseLeave = () => setHover(false)

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      onClick={onChange}
    >
      {value && <div style={contentStyle} />}
    </div>
  )
}
