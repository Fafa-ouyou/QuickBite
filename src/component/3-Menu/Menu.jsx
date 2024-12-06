// Menu.js
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { MenuList } from '../../helpers/pizzaList';
import './Menu.css';
import Cart from './Panier';

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [categorie, setCategorie] = useState("");
  const categories=["Boisson","Burger","Pizza"]

  // Fonction pour ajouter une pizza au panier
  const ajout_panier = (pizza) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === pizza.id);
      if (productIndex !== -1) {
        alert("Déjà dans le panier  <tu peux mise à jour la quantité dans le panier>"); 
      return prevCart; 
        // updatedCart[productIndex].quantity += 1;
        // return updatedCart;
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCart(cart.filter((pizza) => pizza.id !== productId));
  };


  const handleBuy = () => {
    alert("Achat effectué !");
    setCart([]);
  };
  

  const handleUpdateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, quantity: item.quantity + amount };
          return updatedItem;
        }
        return item;
      }).filter((item) => item.quantity > 0); 

      return updatedCart;
    });
  };

  const filteredMenu = categorie 
  ? MenuList.filter(item => item.categorie === categorie)
  : MenuList;

  return (
    <div className="menu">

      <div className='filtre_categorie'>
        <h1 className='filtre'>category</h1>
      <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
      <option value="">Toutes les catégories</option>
        {categories.map((catg,index)=>{
          return(<option key={index} value={catg}>{catg}</option>)
        } 
        )}
        
      </select>
      </div>


      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-items">
        {filteredMenu.map((pizza) => (
          <MenuItem
            key={pizza.id}
            image={pizza.image}
            name={pizza.name}
            price={pizza.price}
            id={pizza.id}
            ajout_panier={ajout_panier} // Passer la fonction ici
          />
        ))}
      </div>

      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={handleUpdateQuantity} handleBuy={handleBuy}/>
    </div>
  );
}
