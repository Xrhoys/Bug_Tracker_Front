import React, { useState } from 'react'
import styles from './MainPanel.module.css'
import TopBar from './../../features/PanelTopBar/topbar'
import { useSelector } from 'react-redux'
import { selectCurrentContainer } from '../../app/containerController'
import {
  DASHBOARD,
  PROFILE,
  PROJECTS,
  SETTING,
  MESSAGE,
  ISSUES,
} from '../../app/boardNames'
import ProjectPanel from './Panels/project'
import DashboardPanel from './Panels/dashboard'
import IssuesPanel from './Panels/issues'
import ProfilePanel from './Panels/profile'
import SettingPanel from './Panels/setting'
import MessagePanel from './Panels/message'

const container = {
  [PROJECTS]: ProjectPanel,
  [DASHBOARD]: DashboardPanel,
  [ISSUES]: IssuesPanel,
  [PROFILE]: ProfilePanel,
  [SETTING]: SettingPanel,
  [MESSAGE]: MessagePanel,
}

export default function MainPanel(props) {
  const currentContainer = useSelector(selectCurrentContainer)
  const Panel = container[currentContainer]
  return (
    <div className={styles.container}>
      <TopBar />
      <Panel />
    </div>
  )
}
