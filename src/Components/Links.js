import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </nav>
        <div className='CenterLinks'>
        <Link to='/friends'>Plans With Friends</Link>
        </div>
    </div>
  )
}

export default Links