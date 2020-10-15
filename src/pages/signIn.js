import React, { useState } from 'react'
import styles from './signin.module.css'
import Bug from './../assets/svg/bug'
import { Link } from 'react-router-dom'

const BUG_COLOR = '#5E81F4'
const BUG_WIDTH = '60px'
const BUG_HEIGHT = 'auto'
const SUBMIT = 'Sign In'

export default function SignIn(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUsername = (event) => setUsername(event.target.value)
  const onChangePassword = (event) => setPassword(event.target.value)

  const onSubmit = (event) => {}

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
              onChange={onChangeUsername}
              value={username}
              placeholder="Username"
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
          <Link>
            <p className={styles.forgotPassword}>Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
