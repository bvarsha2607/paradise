import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import Navbar from './Navbar';

function CartItem({ onHomeClick, onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const parseCost = (cost) => parseFloat(String(cost).replace('$', ''));

  const calculateItemSubtotal = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Checkout: Coming Soon!');
  };

  return (
    <div className="cart-page">
      <Navbar onHomeClick={onHomeClick} onPlantsClick={onContinueShopping} onCartClick={() => {}} />

      <div className="cart-container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">Unit price: {item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)} className="quantity-btn">
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)} className="quantity-btn">
                      +
                    </button>
                  </div>
                  <p className="cart-item-subtotal">
                    Subtotal: ${calculateItemSubtotal(item)}
                  </p>
                  <button className="delete-btn" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total">
          <h2>Total: ${calculateTotalAmount()}</h2>
        </div>

        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
