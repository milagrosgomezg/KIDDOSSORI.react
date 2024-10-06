
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const Header = () => {
  const [cartCount, setCartCount] = useState(0); // estado del carrito

  return (
    <header>
      <nav className="navbar">
        {}
        <div className="navbar-left">
          <img src="./src/assets/Kidd.png" alt="KIDDOSSORI logo" className="logo" />
          <h1 className="store-name">KIDDOSSORI</h1>
        </div>

        {}
        <div className="navbar-center">
          <ul className="category-list">
            <li><a href="#juguetes-montessori">Rampas y Autos</a></li>
            <li><a href="#rompecabezas">Individuales</a></li>
            <li><a href="#musicales">Musicales</a></li>
            <li><a href="#bloques">Juegos de Plaza</a></li>
          </ul>
        </div>

        {}
        <div className="navbar-right">
          <div className="cart-widget">
            <FaShoppingCart size={24} />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

