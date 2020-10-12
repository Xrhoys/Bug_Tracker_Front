import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './dropdown.module.css'
import ChevronDown from './../../assets/svg/chevron_down'

const CHEVRON_COLOR = '#707070'
const CHEVRON_WIDTH = '14px'
const CHEVRON_HEIGHT = 'auto'
const CHEVRON_STROKE = '2px'

export default function Dropdown(props) {
  const { children, trigger } = props
  const [open, setOpen] = useState(false)

  const toggle = function () {
    setOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <div onClick={toggle} className={styles.triggerContainer}>
        {trigger}
        <ChevronDown
          fill={CHEVRON_COLOR}
          width={CHEVRON_WIDTH}
          height={CHEVRON_HEIGHT}
          strokeWidth={CHEVRON_STROKE}
        />
      </div>
      <div style={{ display: !open ? 'none' : null, position: 'absolute' }}>
        {children}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.node,
}
