import React from 'react'
import styleContainer from './container.module.css'
import styleProject from './project.module.css'
import App from './../../../assets/svg/app'
import { useSelector } from 'react-redux'
import { selectProjectList } from '../../../app/project'

const ICON_WIDTH = '30px'
const ICON_HEIGHT = 'auto'
const ICON_FILL = '#5E81F4'

export default function ProjectPanel(props) {
  const projectList = useSelector(selectProjectList)

  const renderCards = <div></div>

  return (
    <div className={styleContainer.container}>
      {projectList.length !== 0 ? renderCards : Empty}
    </div>
  )
}

const Empty = () => (
  <div className={styleProject.emptyContainer}>
    <App width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_FILL} />
  </div>
)
