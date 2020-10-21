import React from 'react'
import { useSelector } from 'react-redux'
import styles from './projectCard.module.css'

export default function ProjectCard(props) {
  const { pid } = props
  const project = useSelector((state) =>
    state.project.list.find((element) => element.id === pid)
  )
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.flag} />
        <h1 className={styles.title}>{project.name}</h1>
      </div>
      <div className={styles.bottom} />
    </div>
  )
}
