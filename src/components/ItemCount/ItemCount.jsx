import { useState } from "react"

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState (1)

    //restar de a uno al contador
    const handleClickSubtract = () => {
       if(count > 1) {
        setCount(count - 1)
       }
    }
    
    const handleClickAdd = () => {
       if(count < stock ){
        setCount(count + 1)
       }
        
    }

    return (
        <div>
            <button on click={handleClickSubtract}>-</button>
            <p>(count)</p>
            <button onClick={handleClickAdd} >+</button>
            <button onClick={() => addProduct(count)}>Agregar producto al carrito</button>
        </div>
    )
}

export default ItemCount