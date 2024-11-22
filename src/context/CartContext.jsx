import { Children, createContext, useState } from "react";

const cartContext = createContext ()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    
    const addProductInCart = (newProduct) => {
        setCart ([... cart, newProduct])
    }

    const totalQuantity = () => {
        const quantity  = cart.reduce ((total, ProductCart) = total + ProductCart.quantity, 0)
        return quantity
    }


    return(
        <cartContext.Provider value={{cart, addProductInCart, totalQuantity}}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext, CartProvider}