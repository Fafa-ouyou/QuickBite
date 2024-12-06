import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='About flex'>
      <div className='leftAbout'>
          <h1>ABOUT US</h1>
          <p>
          Welcome to <b>QuickBite </b> <br />
At <b>QuickBite </b> , we are passionate about serving you delicious, high-quality meals that are fast, fresh, and made with love. Our mission is to redefine the fast food experience by combining great taste with exceptional service.
          </p>
      </div>
      
      <div className='RightAbout'>
            <img src="/makingpizza.jpeg" alt="" />
      </div>
    </div>
  )
}
