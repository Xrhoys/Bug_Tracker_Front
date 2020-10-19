import React, { useState } from 'react'
import styles from './signin.module.css'
import Bug from './../assets/svg/bug'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../app/user'

const BUG_COLOR = '#5E81F4'
const BUG_WIDTH = '60px'
const BUG_HEIGHT = 'auto'
const SUBMIT = 'Sign In'

export default function SignIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onChangeEmail = (event) => setEmail(event.target.value)
  const onChangePassword = (event) => setPassword(event.target.value)

  const onSubmit = (event) => {
    // TODO: input verification with UserObject
    event.preventDefault()
    dispatch(signIn(email, password))
  }

  return (
    <div className={styles.container}>
      <div className={styles.windowContainer}>
        <div className={styles.topPart}>
          <Bug
            fill={BUG_COLOR}
            width={BUG_WIDTH}
            height={BUG_HEIGHT}
            className={styles.bug}
          />
          <h1 className={styles.bugTracker}>Bug Tracker</h1>
        </div>
        <div>
          <form className={styles.inputsPart} onSubmit={onSubmit}>
            <input
              type="text"
              className={styles.text}
              onChange={onChangeEmail}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              className={styles.text}
              onChange={onChangePassword}
              value={password}
              placeholder="Password"
            />
            <input
              type="submit"
              className={styles.submitButton}
              value={SUBMIT}
            />
          </form>
          <p className={styles.signUp}>
            Get involved! {'\t'}
            <Link to="/signup">
              <u>Sign Up</u>
            </Link>
          </p>
          <Link to="/forgetPassword">
            <p className={styles.forgotPassword}>Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
