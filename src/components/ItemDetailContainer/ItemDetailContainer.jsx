import { useState, useEffect } from "react";
import {getProducts} from "../../data/data.js"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./path/to/your/data"; // Asegúrate de que la ruta de importación es correcta
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((productData) => productData.id === idProduct);
                setProduct(findProduct);
            })
            .catch((error) => console.error(error)); // Es buena práctica manejar errores aquí
    }, [idProduct]); // Agrega `idProduct` como dependencia

    return (
        <ItemDetail product={product} />
    );
};

export default ItemDetailContainer;
