import React, { useState } from 'react'
import styleContainer from './container.module.css'
import styleProject from './project.module.css'
import App from './../../../assets/svg/app'
import { useSelector } from 'react-redux'
import { selectProjectList } from '../../../app/project'
import Modal from 'react-modal'
import ProjectCard from '../../../features/projectCard/projectCard'

const ICON_WIDTH = '100px'
const ICON_HEIGHT = 'auto'
const ICON_FILL = '#5E81F4'

export default function ProjectPanel(props) {
  const projectList = useSelector(selectProjectList)
  const [openDialog, setOpenDialog] = useState(false)

  const RenderCards = (
    <div className={styleProject.renderProjectContainer}>
      {projectList.map((element) => (
        <ProjectCard pid={element.id} />
      ))}
    </div>
  )

  const createOnShow = () => setOpenDialog(true)
  const createOnHide = () => setOpenDialog(false)

  const modalStyle = {
    background: {
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
  }

  const Empty = () => (
    <div className={styleProject.emptyContainer}>
      <p className={styleProject.emptyTitle}>
        <p>No projects!</p>
        Setup a new one!
      </p>
      <App width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_FILL} />
      <button className={styleProject.emptyButton} onClick={createOnShow}>
        New Project
      </button>
      <Modal
        isOpen={openDialog}
        onRequestClose={createOnHide}
        style={{ overlay: modalStyle.background }}
      >
        <p>CREATE A FUCKING PROJECT</p>
      </Modal>
    </div>
  )

  return (
    <div className={styleContainer.container}>
      {projectList?.length !== 0 ? RenderCards : <Empty />}
    </div>
  )
}
