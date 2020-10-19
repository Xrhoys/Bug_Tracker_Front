import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../app/user'
import styles from './signin.module.css'

const SUBMIT = 'Submit'

export default function SignUp(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [check, setCheck] = useState(false)
  const dispatch = useDispatch()

  const onChangeUsername = (event) => setUsername(event.target.value)
  const onChangePassword = (event) => setPassword(event.target.value)
  const onChangeEmail = (event) => setEmail(event.target.value)
  const onChangeCheck = (event) => setCheck(event.target.checked)

  const onSubmit = (event) => {
    // TODO: input verficiation with UserObject
    event.preventDefault()
    dispatch(signUp(username, email, password))
  }

  const titleStyle = {
    fontSize: 28,
    color: '#fff',
  }

  return (
    <div className={styles.container}>
      <div className={styles.windowContainer} style={{ height: 400 }}>
        <div className={styles.topPart} style={{ height: 75 }}>
          <h1 style={titleStyle}>Sign Up</h1>
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
              <div>
                <input
                  type="checkbox"
                  checked={check}
                  onChange={onChangeCheck}
                />
                <label>Agrees to terms of use</label>
              </div>
              <input
                type="submit"
                className={styles.submitButton}
                value={SUBMIT}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
