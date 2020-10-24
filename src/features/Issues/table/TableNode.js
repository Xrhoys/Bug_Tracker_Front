import React from 'react'
import { useState } from 'react'
import Checkbox from '../../checkbox/checkbox'
import styles from './TableNode.module.css'
import Flags from './../../../app/utils/flag'

export default function TableNode(props) {
  const { title, content, fileName, timestamps, flag } = props

  const [selected, setSelected] = useState(false)

  const onChange = () => setSelected((prevState) => !prevState)

  const flagColor = null ?? Flags[flag]

  return (
    <div className={styles.container}>
      <div className={styles.flag} style={{ backgroundColor: flagColor }} />
      <div className={styles.checkbox}>
        <Checkbox value={selected} onChange={onChange} />
      </div>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.fileName}>{`(${fileName})`}</p>
      </div>
      <p className={styles.content}>{content}</p>
      <p className={styles.timestamps}>{timestamps}</p>
    </div>
  )
}
