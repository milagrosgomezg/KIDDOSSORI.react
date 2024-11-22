import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"
import { obtenerProductos } from "./firebase"; 

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idCategory){
          const productsFilter = data.filter( (product) => product.category === idCategory )
          setProducts(productsFilter)
        }else{
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Fin de la promesa")
      })
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )
}

import React, { useEffect, useState } from "react";
import { obtenerProductos } from "./firebase";

const ListaDeProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await obtenerProductos();
      setProductos(productos);
    };

    cargarProductos();
  }, []);

  return (
    <div>
      <h1>Catálogo de Juegos de Madera</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

