import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentProject } from './../../app/project'
import styles from './NavBanner.module.css'
import ChevronDown from './../../assets/svg/chevron_down'

const CHEVRON_COLOR = '#5E81F4'
const CHEVRON_WIDTH = '14px'
const CHEVRON_HEIGHT = 'auto'
const CHEVRON_STROKE = '2px'

export default function NavBanner(props) {
  const currentProject = useSelector(selectCurrentProject)

  return (
    <div className={styles.container}>
      <img
        src={currentProject.logoURL}
        alt="project logo"
        className={styles.logo}
      />
      <div
        className={styles.clickGroup}
        onClick={() => alert('banner group clicked')}
      >
        <p className={['no-select', styles.title].join(' ')}>
          {currentProject.title}
        </p>
        <ChevronDown
          fill={CHEVRON_COLOR}
          width={CHEVRON_WIDTH}
          height={CHEVRON_HEIGHT}
          strokeWidth={CHEVRON_STROKE}
        />
      </div>
    </div>
  )
}
