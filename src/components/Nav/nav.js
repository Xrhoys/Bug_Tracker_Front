import React from 'react'
import styles from './nav.css'
import NavLink from './../../features/NavLink/NavLink'
import Dashboard from './../../assets/svg/dashboard'
import Chat from './../../assets/svg/chat_left'
import Collection from './../../assets/svg/collection'
import CPU from './../../assets/svg/cpu_fill'
import Gear from './../../assets/svg/gear'
import Person from './../../assets/svg/person'
import NavBanner from './../../features/NavBanner/NavBanner'

const LINK_DASHBOARD = 'dashboard'
const LINK_ISSUES = 'issues'
const LINK_PROJECTS = 'projects'
const LINK_PROFILE = 'profile'
const LINK_MESSAGE = 'message'
const LINK_SETTINGS = 'settings'

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <NavBanner />
      <NavLink
        text="Dashboard"
        icon={Dashboard}
        onClick={() => alert('CLICKED')}
        routerLink={LINK_DASHBOARD}
      />
      <NavLink
        text="Issues"
        icon={CPU}
        onClick={() => alert('CLICKED')}
        routerLink={LINK_ISSUES}
      />
      <NavLink
        text="Projects"
        icon={Collection}
        onClick={() => alert('CLICKED')}
        routerLink={LINK_PROJECTS}
      />
      <NavLink
        text="Profile"
        icon={Person}
        onClick={() => alert('CLICKED')}
        routerLink={LINK_PROFILE}
      />
      <NavLink
        text="Message"
        icon={Chat}
        onClick={() => alert('CLICKED')}
        routerLink={LINK_MESSAGE}
      />
      <NavLink
        text="Settings"
        icon={Gear}
        onClick={() => alert('CLICKED')}
        routerLink={LINK_SETTINGS}
      />
    </div>
  )
}
