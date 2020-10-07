import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="prefix__bi prefix__bi-cpu-fill"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.5.5a.5.5 0 00-1 0V2A2.5 2.5 0 002 4.5H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2A2.5 2.5 0 004.5 14v1.5a.5.5 0 001 0V14h1v1.5a.5.5 0 001 0V14h1v1.5a.5.5 0 001 0V14h1v1.5a.5.5 0 001 0V14a2.5 2.5 0 002.5-2.5h1.5a.5.5 0 000-1H14v-1h1.5a.5.5 0 000-1H14v-1h1.5a.5.5 0 000-1H14v-1h1.5a.5.5 0 000-1H14A2.5 2.5 0 0011.5 2V.5a.5.5 0 00-1 0V2h-1V.5a.5.5 0 00-1 0V2h-1V.5a.5.5 0 00-1 0V2h-1V.5zm1 4.5A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3zm0 1a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z"
      />
    </svg>
  )
}

export default SvgComponent
