import React, { useState } from 'react'
import styles from './MainPanel.module.css'
import TopBar from './../../features/PanelTopBar/topbar'
import { Switch, Route } from 'react-router-dom'

export default function MainPanel(props) {
  return (
    <div className={styles.container}>
      <TopBar />
      <Switch>
        <Route path="/dashboard"></Route>
        <Route path="/projects"></Route>
        <Route path="/issues"></Route>
        <Route path="/profile"></Route>
        <Route path="/setting"></Route>
        <Route path="/message"></Route>
      </Switch>
    </div>
  )
}
