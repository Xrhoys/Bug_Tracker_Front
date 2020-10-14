import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="prefix__bi prefix__bi-bug-fill"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.978.855a.5.5 0 10-.956.29l.41 1.352A4.985 4.985 0 003 6h10a4.985 4.985 0 00-1.432-3.503l.41-1.352a.5.5 0 10-.956-.29l-.291.956A4.978 4.978 0 008 1a4.979 4.979 0 00-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0013 11h.5a.5.5 0 01.5.5v.5a.5.5 0 101 0v-.5a1.5 1.5 0 00-1.5-1.5H13V9h1.5a.5.5 0 000-1H13V7h.5A1.5 1.5 0 0015 5.5V5a.5.5 0 00-1 0v.5a.5.5 0 01-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 01-.5-.5V5a.5.5 0 00-1 0v.5A1.5 1.5 0 002.5 7H3v1H1.5a.5.5 0 000 1H3v1h-.5A1.5 1.5 0 001 11.5v.5a.5.5 0 101 0v-.5a.5.5 0 01.5-.5H3a5 5 0 004.5 4.975z"
      />
    </svg>
  )
}

export default SvgComponent
