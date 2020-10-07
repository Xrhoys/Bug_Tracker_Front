import React from 'react'
import './App.css'
import NavLink from './features/NavLink/NavLink'
import Dashboard from './assets/svg/dashboard'
import Chat from './assets/svg/chat_left'
import Collection from './assets/svg/collection'
import CPU from './assets/svg/cpu_fill'
import Gear from './assets/svg/gear'
import Person from './assets/svg/person'
import NavBanner from './features/NavBanner/NavBanner'

function App() {
  return (
    <div>
      <NavBanner />
      <NavLink
        text="Dashboard"
        icon={Dashboard}
        onClick={() => alert('CLICKED')}
      />
      <NavLink text="Issues" icon={CPU} onClick={() => alert('CLICKED')} />
      <NavLink
        text="Projects"
        icon={Collection}
        onClick={() => alert('CLICKED')}
        selected
      />
      <NavLink text="Profile" icon={Person} onClick={() => alert('CLICKED')} />
      <NavLink text="Message" icon={Chat} onClick={() => alert('CLICKED')} />
      <NavLink text="Settings" icon={Gear} onClick={() => alert('CLICKED')} />
    </div>
  )
}

export default App
