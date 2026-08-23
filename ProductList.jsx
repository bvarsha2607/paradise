import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://placehold.co/300x300/1e824c/ffffff?text=Snake+Plant', cost: '$18.00' },
      { name: 'Spider Plant', image: 'https://placehold.co/300x300/1e824c/ffffff?text=Spider+Plant', cost: '$14.00' },
      { name: 'Peace Lily', image: 'https://placehold.co/300x300/1e824c/ffffff?text=Peace+Lily', cost: '$22.00' },
      { name: 'Boston Fern', image: 'https://placehold.co/300x300/1e824c/ffffff?text=Boston+Fern', cost: '$16.00' },
      { name: 'Rubber Plant', image: 'https://placehold.co/300x300/1e824c/ffffff?text=Rubber+Plant', cost: '$20.00' },
      { name: 'Areca Palm', image: 'https://placehold.co/300x300/1e824c/ffffff?text=Areca+Palm', cost: '$28.00' },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', image: 'https://placehold.co/300x300/8e6bbf/ffffff?text=Lavender', cost: '$12.00' },
      { name: 'Rosemary', image: 'https://placehold.co/300x300/8e6bbf/ffffff?text=Rosemary', cost: '$10.00' },
      { name: 'Jasmine', image: 'https://placehold.co/300x300/8e6bbf/ffffff?text=Jasmine', cost: '$15.00' },
      { name: 'Mint', image: 'https://placehold.co/300x300/8e6bbf/ffffff?text=Mint', cost: '$8.00' },
      { name: 'Basil', image: 'https://placehold.co/300x300/8e6bbf/ffffff?text=Basil', cost: '$9.00' },
      { name: 'Eucalyptus', image: 'https://placehold.co/300x300/8e6bbf/ffffff?text=Eucalyptus', cost: '$17.00' },
    ],
  },
  {
    category: 'Low-Light Plants',
    plants: [
      { name: 'ZZ Plant', image: 'https://placehold.co/300x300/c76b3c/ffffff?text=ZZ+Plant', cost: '$24.00' },
      { name: 'Pothos', image: 'https://placehold.co/300x300/c76b3c/ffffff?text=Pothos', cost: '$13.00' },
      { name: 'Philodendron', image: 'https://placehold.co/300x300/c76b3c/ffffff?text=Philodendron', cost: '$19.00' },
      { name: 'Chinese Evergreen', image: 'https://placehold.co/300x300/c76b3c/ffffff?text=Chinese+Evergreen', cost: '$21.00' },
      { name: 'Cast Iron Plant', image: 'https://placehold.co/300x300/c76b3c/ffffff?text=Cast+Iron+Plant', cost: '$23.00' },
      { name: 'Dracaena', image: 'https://placehold.co/300x300/c76b3c/ffffff?text=Dracaena', cost: '$26.00' },
    ],
  },
];

function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedPlants, setAddedPlants] = useState({});

  const isInCart = (name) =>
    Boolean(addedPlants[name]) || cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedPlants((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <Navbar onHomeClick={onHomeClick} onPlantsClick={() => {}} onCartClick={onCartClick} />

      <div className="product-list-container">
        <h1>Our Plants</h1>
        {plantsData.map((categoryGroup) => (
          <div className="category-section" key={categoryGroup.category}>
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plant-grid">
              {categoryGroup.plants.map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={isInCart(plant.name)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
