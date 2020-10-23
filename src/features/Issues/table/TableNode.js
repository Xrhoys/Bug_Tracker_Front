import React from 'react'
import styles from './TableNode.module.css'

export default function TableNode(props) {
  const { title, content, fileName, timestamps } = props
  return (
    <div className={styles.container}>
      <div>
        <h1>{title}</h1>
        <p>`(${fileName})`</p>
      </div>
      <p>{content}</p>
      <p>{timestamps}</p>
    </div>
  )
}
