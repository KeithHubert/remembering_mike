import React from 'react'
import Link from 'next/link'

export default function NavBar () {
  return (
    <div className='navBar'>
      <Link href='/_photos'><a>Photos</a></Link>
      <Link href='/_timeline'><a>Timeline</a></Link>
      <Link href='/_comments'><a>Comments</a></Link>
    </div>
  )
}
