import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './../../app/user'

export default function Username(props) {
  const user = useSelector(selectCurrentUser)

  const name = user ? user.name : 'Login'
  return (
    <div onClick={props.onClick}>
      <p>{name}</p>
    </div>
  )
}

Username.propTypes = {
  onClick: PropTypes.func,
}
