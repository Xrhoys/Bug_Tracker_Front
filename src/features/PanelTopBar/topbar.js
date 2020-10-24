import React from 'react'
import styles from './topbar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectCurrentUser } from './../../app/user'
import Dropdown from './../Dropdown/dropdown'
import { Dropdown as Drop } from 'react-bootstrap'
import { selectCurrentContainer } from '../../app/containerController'

export default function Topbar(props) {
  const user = useSelector(selectCurrentUser)
  const pathname = useSelector(selectCurrentContainer)
  const dispatch = useDispatch()

  const trigger = <p className={styles.username}>{user?.username}</p>

  const onLogout = () => dispatch(logout())

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={[styles.topBarTitle, 'no-select'].join(' ')}>
          {pathname.toUpperCase()}
        </h1>
        <Dropdown trigger={trigger}>
          <Drop.Menu className={styles.dropdownMenu}>
            <Drop.Item className={styles.dropdownItem} onClick={onLogout}>
              LOGOUT
            </Drop.Item>
          </Drop.Menu>
        </Dropdown>
      </div>
      <div className={styles.separator} />
    </div>
  )
}
