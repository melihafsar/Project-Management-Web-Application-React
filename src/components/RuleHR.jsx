import React from 'react'

function RuleHR({color}) {
  return (
    <>
        <hr className='hr'
      style={{
        borderColor: color,
        width: 240,
      }}
    />
    </>
  )
}

export default RuleHR