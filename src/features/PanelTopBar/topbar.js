import React from 'react'
import styles from './topbar.module.css'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './../../app/user'
import Dropdown from './../Dropdown/dropdown'
import { Dropdown as Drop } from 'react-bootstrap'
import { selectCurrentContainer } from '../../app/containerController'

export default function Topbar(props) {
  const user = useSelector(selectCurrentUser)
  const pathname = useSelector(selectCurrentContainer)

  const trigger = <p className={styles.username}>{user.name}</p>

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{pathname.toUpperCase()}</h1>
        <Dropdown trigger={trigger}>
          <Drop.Menu className={styles.dropdownMenu}>
            <Drop.Item className={styles.dropdownItem}> LOGOUT </Drop.Item>
          </Drop.Menu>
        </Dropdown>
      </div>
      <div className={styles.separator} />
    </div>
  )
}
