import "./itemdetail.css"

const ItemDetail = ({product}) => {
    return (
        <div className="item-detail">
            <img src="{product.image}" alt="" width={600}/>
            <div className="text-detail.container">
                <h2 className="title-detail">{product.nombre}</h2>
                <p className="text-detail">{product.color}</p>
                <p className="text-detail">{product.material}</p>
                <p className="text-detail">Precio: ${product.precio}</p>
            </div>
        </div>
    )
}

export default ItemDetail