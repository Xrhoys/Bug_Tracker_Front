import React, { useState } from 'react'
import styles from './MainPanel.css'
import TopBar from './../../features/PanelTopBar/topbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function MainPanel(props) {
  return (
    <div className={styles.container}>
      <TopBar />
      <Router>
        <Switch>
          <Route path="/dashboard"></Route>
          <Route path="/projects"></Route>
          <Route path="/issues"></Route>
          <Route path="/profile"></Route>
          <Route path="/setting"></Route>
          <Route path="/message"></Route>
        </Switch>
      </Router>
    </div>
  )
}
