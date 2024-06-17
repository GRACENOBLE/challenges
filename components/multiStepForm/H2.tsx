import React from 'react'

export default function H2({children}:{children:string}) {
  return (
    <h2 className='text-xs font-bold'>
      {children}
    </h2>
  )
}
