import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="prefix__bi prefix__bi-chat-left"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M14 1H2a1 1 0 00-1 1v11.586l2-2A2 2 0 014.414 11H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z"
      />
    </svg>
  )
}

export default SvgComponent
