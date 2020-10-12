/**
 * @function Counter
 * @description
 * @param {Object} props
 */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavLink.module.css'
import { Link } from 'react-router-dom'

const DEFAULT_ICON_COLOR = '#C7CADD'
const DEFAULT_ICON_COLOR_HIGHLIGHT = '#5E81F4'
const DEFAULT_ICON_HEIGHT = '16px'

export default function Counter(props) {
  const { icon: Icon, text, routerLink } = props

  const pathname = window.location.pathname.replace('/', '')

  if (routerLink === pathname) {
    return (
      <Link to={`/${routerLink}`}>
        <div className={styles.container}>
          <Icon
            fill={DEFAULT_ICON_COLOR_HIGHLIGHT}
            height={DEFAULT_ICON_HEIGHT}
            width="auto"
            strokeWidth={2}
          />
          <p className={['no-select', styles.titleSelected].join(' ')}>
            {text}
          </p>
        </div>
      </Link>
    )
  }
  return (
    <Link to={`/${routerLink}`}>
      <div className={styles.container}>
        <Icon
          fill={DEFAULT_ICON_COLOR}
          height={DEFAULT_ICON_HEIGHT}
          width="auto"
          strokeWidth={2}
        />
        <p className={['no-select', styles.title].join(' ')}>{text}</p>
      </div>
    </Link>
  )
}

Counter.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  routerLink: PropTypes.string,
}
