
import React from 'react';
import { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;