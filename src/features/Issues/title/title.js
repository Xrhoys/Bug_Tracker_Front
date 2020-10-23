import React from 'react'
import { useSelector } from 'react-redux'
import styles from './title.module.css'

export default function Title(props) {
  const { pid } = props
  const projectIssues = useSelector((state) =>
    state.project.list.find((element) => element.id === pid)
  )?.issues

  const unresolvedIssues = projectIssues.filter(
    (element) => element.status === 'unresolved'
  )
  return (
    <div className={styles.container}>
      <h1>Unsolved Issues ({unresolvedIssues.length})</h1>
    </div>
  )
}
