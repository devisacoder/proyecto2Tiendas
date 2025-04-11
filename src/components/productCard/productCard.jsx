import { useContext } from "react"
import { ProductsToBuyContext } from "../../context/ProductsToBuyContext"
import './productCard.css'
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const ProductCard = () => {
    const { id } = useParams()
    const { products, formatearPrecio } = useContext(ProductsToBuyContext) 
    const {  cart, addToCart } = useContext(CartContext)

    const filteresProduct = products.filter((product) => product.id === Number(id))
    
    return(
        <div className="productCard_container">
            {filteresProduct.map((product) => {
                const productInCart = cart.find((item) => item.id === product.id)
                const quantity = productInCart?.quantity || 0

                return (

                    <div className="productCard_containerItemProduct" key={product.id}>
        `               <div>
                            <img className="productCard_imageProduct" loading="lazy" src={product.images[0]} alt={product.name} />
                        </div>
                        <div className="productCard_containerInfo">
                            <h3 className="productCard_nameProduct">{product.name}</h3>
                            <div className="productCard_containerPrice">
                                    <p className="price">
                                        Price: {formatearPrecio(product.price)}
                                    </p>
                                    <p className="stock">Stock: <span className="quantity">{product.stock}</span></p>
                            </div>                    
                            <p className="productCard_descriptionProduct">{product.description}</p>
                            <div className="productCard_buttonWrapper">
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="productCard_buttonProduct"
                                >
                                    Add to cart
                                </button>
                                {quantity > 0 && (
                                    <span className="productCard_quantityBadge">{quantity}</span>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}