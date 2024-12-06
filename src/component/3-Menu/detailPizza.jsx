import React from 'react'
import { MenuList } from '../../helpers/pizzaList';
import { useParams } from 'react-router-dom';
import './DetailPizza.css'
import { Link } from 'react-router-dom';



export default function DetailPizza({onAddToCart}) {
    const { id } = useParams();
    const product = MenuList.find((pizza) => pizza.id === parseInt(id));
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div className="product-detail">
        <h2>{product.name}</h2>
       <img src={product.image} alt={product.name} className="product-detail-image" />   
       <p>Price: ${product.price}</p>
       <p>{product.description}</p>

      <Link to="/Panier/${id}">
       <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
      </Link>
      </div>
    );
    
}
