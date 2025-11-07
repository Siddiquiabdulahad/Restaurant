import React, { useState } from 'react';
import '../styles/components.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems = {
    starters: [
      { name: 'TRUFFLE BRUSCHETTA', description: 'Artisan bread with black truffle and fresh herbs' },
      { name: 'OCEAN CEVICHE', description: 'Fresh seafood marinated in citrus and spices' },
      { name: 'BURRATA CAPRESE', description: 'Creamy burrata with heirloom tomatoes and basil' }
    ],
    mains: [
      { name: 'SIGNATURE RISOTTO', description: 'Arborio rice with seasonal mushrooms and parmesan' },
      { name: 'WAGYU BEEF TENDERLOIN', description: 'Premium beef with red wine reduction' },
      { name: 'ROASTED SEA BASS', description: 'Wild-caught sea bass with herb crust' }
    ],
    desserts: [
      { name: 'CHOCOLATE SOUFFLÉ', description: 'Warm chocolate dessert with vanilla ice cream' },
      { name: 'TIRAMISU MODERN', description: 'Deconstructed classic with coffee essence' },
      { name: 'SEASONAL FRUIT TARTE', description: 'Fresh fruits with almond cream' }
    ]
  };

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="section-title">
          <h2>Our Menu</h2>
          <p>Crafted with passion, served with perfection</p>
        </div>

        <div className="menu-categories">
          <button 
            className={`category-btn ${activeCategory === 'starters' ? 'active' : ''}`}
            onClick={() => setActiveCategory('starters')}
          >
            STARTERS
          </button>
          <button 
            className={`category-btn ${activeCategory === 'mains' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mains')}
          >
            MAIN COURSES
          </button>
          <button 
            className={`category-btn ${activeCategory === 'desserts' ? 'active' : ''}`}
            onClick={() => setActiveCategory('desserts')}
          >
            DESSERTS
          </button>
        </div>

        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;