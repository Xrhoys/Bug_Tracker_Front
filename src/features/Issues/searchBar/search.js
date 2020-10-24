import React, { useState } from 'react'
import styles from './search.module.css'
import SearchIcon from './../../../assets/svg/search'

const ICON_WIDTH = '16px'
const ICON_HEIGHT = '16px'
const ICON_FILL = '#C6C6C6'

export default function Search(props) {
  const [input, setInput] = useState('')
  const onChange = (event) => setInput(event.target.value)
  //TODO: Search completion redux function
  const onSubmit = (event) => console.log('Submited')
  return (
    <div className={styles.container}>
      <SearchIcon width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_FILL} />
      <input
        type="text"
        className={styles.input}
        value={input}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}
