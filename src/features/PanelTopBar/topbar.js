import React from 'react'
import styles from './topbar.module.css'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './../../app/user'
import Dropdown from './../Dropdown/dropdown'

export default function Topbar(props) {
  const pathname = window.location.pathname.replace('/', '').toUpperCase()
  const user = useSelector(selectCurrentUser)

  const trigger = <p className={styles.username}>{user.name}</p>

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{pathname}</h1>
        <Dropdown trigger={trigger}>
          <>
            <div>
              <p>Logout</p>
            </div>
          </>
        </Dropdown>
      </div>
      <div className={styles.separator} />
    </div>
  )
}
