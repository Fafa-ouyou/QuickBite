// Cart.js
import React from 'react';

const Cart = ({ cart, updateQuantity ,handleBuy }) => {
  const handleIncrease = (id) => {
    updateQuantity(id, 1); 
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const handleRemove = (id) => {
    updateQuantity(id, -999); 
  };

  

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <p>
          Total: DH
          {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>

      {cart.length > 0 && (
        <button className="buy-button" onClick={handleBuy}>
          Acheter
        </button>
      )}
    </div>
  );
};

export default Cart;
