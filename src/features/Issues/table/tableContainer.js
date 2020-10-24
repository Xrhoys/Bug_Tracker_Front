import React from 'react'
import styles from './tableContainer.module.css'
import { useSelector } from 'react-redux'
import { selectCurrentProject } from '../../../app/project'
import TableNode from './TableNode'

export default function TableContainer(props) {
  const issues = useSelector(selectCurrentProject)?.issues

  const renderRows = issues?.map((node) => {
    return (
      <>
        <TableNode
          title={node.title}
          content={node.content}
          fileName={node.fileName}
          timestamps={node.timestamps}
          flag={node.flag}
        />
        <span>{node.occurence}</span>
      </>
    )
  })

  return (
    <div className={styles.grid}>
      <h1>Event</h1>
      <h1>#</h1>
      {renderRows}
    </div>
  )
}
