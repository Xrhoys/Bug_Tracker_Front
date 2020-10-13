/**
 * @function Counter
 * @description
 * @param {Object} props
 */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavLink.module.css'
import { selectCurrentContainer, set } from '../../app/containerController'
import { useSelector, useDispatch } from 'react-redux'

const DEFAULT_ICON_COLOR = '#C7CADD'
const DEFAULT_ICON_COLOR_HIGHLIGHT = '#5E81F4'
const DEFAULT_ICON_HEIGHT = '20px'

export default function Counter(props) {
  const { icon: Icon, text, routerLink } = props
  const pathname = useSelector(selectCurrentContainer)
  const dispatch = useDispatch()

  const onClick = () =>
    dispatch({ type: set.type, payload: { container: routerLink } })

  if (routerLink === pathname) {
    return (
      <div className={styles.container}>
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
  routerLink: PropTypes.string,
}
