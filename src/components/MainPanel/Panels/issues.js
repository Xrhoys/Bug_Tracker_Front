import React from 'react'
import Table from './../../../features/Issues/table/tableContainer'
import Title from './../../../features/Issues/title/title'
import SearchBar from './../../../features/Issues/searchBar/search'
import styles from './issues.module.css'

export default function IssuesPanel(props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title />
        <SearchBar />
      </div>
      <Table />
    </div>
  )
}
