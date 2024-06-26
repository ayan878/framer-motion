import React from 'react'

function TiltCard() {
  return (
    <div style={{transform:"translateZ(75px)",
        transformStyle:"preserve-3d"
    }} className='absolute inset-4 grid place-content'><div></div></div>
  )
}

export default TiltCard