import ItemCount from "../ItemCount/ItemCount"
import "./itemdetail.css"
import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
const ItemDetail = ({product}) => {
    const {cart, addProductInCart} = useContext = {cartContext}

    const addProduct = (count) => {
        const productCart = {...product, quantity: count
        }
    }

    return (
        <div className="item-detail">
            <img src="{product.image}" alt="" width={600}/>
            <div className="text-detail.container">
                <h2 className="title-detail">{product.nombre}</h2>
                <p className="text-detail">{product.color}</p>
                <p className="text-detail">{product.material}</p>
                <p className="text-detail">Precio: ${product.precio}</p>

                <ItemCount stock={product.stock} addProduct={addProduct}/>
            </div>
        </div>
    )
}

export default ItemDetail