/**
 * @function Counter
 * @description
 * @param {Object} props
 */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavLink.module.css'

const DEFAULT_ICON_COLOR = '#C7CADD'
const DEFAULT_ICON_COLOR_HIGHLIGHT = '#5E81F4'
const DEFAULT_ICON_HEIGHT = '16px'

export default function Counter(props) {
  const { icon: Icon, text, selected, onClick } = props

  if (selected) {
    return (
      <div className={styles.container} onClick={onClick}>
        <Icon
          fill={DEFAULT_ICON_COLOR_HIGHLIGHT}
          height={DEFAULT_ICON_HEIGHT}
          width="auto"
          strokeWidth={2}
        />
        <p className={['no-select', styles.titleSelected].join(' ')}>{text}</p>
      </div>
    )
  }
  return (
    <div className={styles.container} onClick={onClick}>
      <Icon
        fill={DEFAULT_ICON_COLOR}
        height={DEFAULT_ICON_HEIGHT}
        width="auto"
        strokeWidth={2}
      />
      <p className={['no-select', styles.title].join(' ')}>{text}</p>
    </div>
  )
}

Counter.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

Counter.defaultProps = {
  selected: false,
}
