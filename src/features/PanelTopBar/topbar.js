import React from 'react'
import styles from './topbar.module.css'

export default function Topbar(props) {
  const pathname = window.location.pathname.replace('/', '').toUpperCase()
  return (
    <div className={styles.container}>
      <h1>{pathname}</h1>
    </div>
  )
}
