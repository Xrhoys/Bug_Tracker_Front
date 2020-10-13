import React from 'react'
import styles from './nav.module.css'
import NavLink from './../../features/NavLink/NavLink'
import Dashboard from './../../assets/svg/dashboard'
import Chat from './../../assets/svg/chat_left'
import Collection from './../../assets/svg/collection'
import CPU from './../../assets/svg/cpu_fill'
import Gear from './../../assets/svg/gear'
import Person from './../../assets/svg/person'
import NavBanner from './../../features/NavBanner/NavBanner'
import {
  DASHBOARD,
  ISSUES,
  MESSAGE,
  PROFILE,
  PROJECTS,
  SETTING,
} from '../../app/boardNames'

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <NavBanner />
      <NavLink text="Dashboard" icon={Dashboard} routerLink={DASHBOARD} />
      <NavLink text="Issues" icon={CPU} routerLink={ISSUES} />
      <NavLink text="Projects" icon={Collection} routerLink={PROJECTS} />
      <NavLink text="Profile" icon={Person} routerLink={PROFILE} />
      <NavLink text="Message" icon={Chat} routerLink={MESSAGE} />
      <NavLink text="Settings" icon={Gear} routerLink={SETTING} />
    </div>
  )
}
