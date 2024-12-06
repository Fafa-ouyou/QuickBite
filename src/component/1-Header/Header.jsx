import React from 'react'
import { useState } from 'react'
import './Header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';


export default function Header() {
    const [showmenu,setshowmenu]=useState(false)
  return (
    <header className='flex'>
        <div className='flex'>
            <img src="/ff.png" alt="Pizza" />
            <h3>QuickBite</h3>
        </div>
        <div/>
        <nav  >
            <ul className='flex'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/About">About us</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                {/* <li><Link to="/Panier">Cart</Link></li> */}

            </ul>
        </nav>
        <button className='menu' onClick={() =>setshowmenu(true)}><ReorderIcon/></button>
        {showmenu && 
        (<div  className='fixed' >
            <ul  className='model'>
                <li><button className='closemenu' onClick={() => setshowmenu(false)}><ClearIcon/></button></li>
                <li><Link onClick={() => setshowmenu(false)} to="/">Home</Link></li>
                <li><Link onClick={() => setshowmenu(false)} to="/Menu">Menu</Link></li>
                <li><Link onClick={() => setshowmenu(false)} to="/About">About us</Link></li>
                <li><Link onClick={() => setshowmenu(false)} to="/Contact">Contact</Link></li>
                {/* <li><Link onClick={() => setshowmenu(false)} to="/Panier">Cart</Link></li> */}

            </ul>
            
        </div>)
        }
    </header>
  )
}
