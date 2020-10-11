import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './../../app/user'
import ChevronDown from './../../assets/svg/chevron_down'

const CHEVRON_COLOR = '#707070'
const CHEVRON_WIDTH = '14px'
const CHEVRON_HEIGHT = 'auto'
const CHEVRON_STROKE = '2px'

export default function Username(props) {
  const user = useSelector(selectCurrentUser)

  const name = user ? user.name : 'Login'
  return (
    <div onClick={props.onClick}>
      <p>{name}</p>
      <ChevronDown
        fill={CHEVRON_COLOR}
        width={CHEVRON_WIDTH}
        height={CHEVRON_HEIGHT}
        strokeWidth={CHEVRON_STROKE}
      />
    </div>
  )
}

Username.propTypes = {
  onClick: PropTypes.func,
}
