import React from 'react'
import styles from './tableContainer.module.css'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectCurrentProject } from '../../../app/project'
import TableNode from './TableNode'

export default function TableContainer(props) {
  const issues = useSelector(selectCurrentProject)?.issues

  const renderRows = issues.map((node) => {
    return (
      <tr>
        <td>
          <TableNode
            title={node.title}
            content={node.content}
            fileName={node.fileName}
            timestamps={node.timestamps}
          />
        </td>
        <td>{node.occurence}</td>
      </tr>
    )
  })

  return (
    <Table>
      <thread>
        <tr>
          <th>Event</th>
          <th>Occurence</th>
        </tr>
      </thread>
      <tbody>{renderRows}</tbody>
    </Table>
  )
}
