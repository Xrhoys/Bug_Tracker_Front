import React from 'react'
import PropTypes from 'prop-types'
import styles from './dropdown.module.css'
import './dropdown.module.css'
import ChevronDown from './../../assets/svg/chevron_down'
import { Dropdown as Drop } from 'react-bootstrap'

const CHEVRON_COLOR = '#707070'
const CHEVRON_WIDTH = '12px'
const CHEVRON_HEIGHT = 'auto'
const CHEVRON_STROKE = '2px'

export default function Dropdown(props) {
  const { children, trigger } = props

  return (
    <div className={styles.container}>
      <Drop className={styles.dropContainer}>
        <Drop.Toggle className={styles.dropdownTrigger}>
          {trigger}
          <div className={styles.chevron}>
            <ChevronDown
              fill={CHEVRON_COLOR}
              width={CHEVRON_WIDTH}
              height={CHEVRON_HEIGHT}
              strokeWidth={CHEVRON_STROKE}
            />
          </div>
        </Drop.Toggle>
        {children}
      </Drop>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.node,
}
