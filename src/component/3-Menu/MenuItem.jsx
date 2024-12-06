import React from 'react'
import './Menuitem.css'
import { Link } from 'react-router-dom';

export default function MenuItem({image,name,price,ajout_panier,id}) {
  const item = { id, name, price, image };
  return (

      <div className='item'>
        <div  className='menu-item-image' style={{backgroundImage:`url(${image})`}}></div>
        <h2>{name}</h2>
        <p>{price} DH</p>
        <button onClick={() => ajout_panier(item)}>Ajouter au panier</button><br />

        {/* <Link to="/DetailPizza">
        <button >Detail de pizza</button>
        </Link> */}
        <Link to={`/DetailPizza/${id}`}>View Details</Link>
    </div>
  )
}
