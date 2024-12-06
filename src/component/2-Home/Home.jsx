import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='home flex' >
      <div className='home_left'>
      <h1>QuickBite</h1>
      <p>More than food, it’s an experience!</p>
      <Link to="/menu">
      <button>ORDER NOW</button>
      </Link>
      </div>
      <div className='home_right'>
          <img src="/ff.png" alt="" />
      </div>
    </div>
  )
}
