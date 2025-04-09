import { useContext } from "react"
import './productsToBuy.css'
import { Link } from "react-router-dom"
import addCartIcon from "../../assets/addCartIcon.svg"
import { CartContext } from "../../context/CartContext"
import { ProductContext } from "../../context/ProductContext"

export const ProductsToBuy = () => {
    const { products, formatearPrecio } = useContext(ProductContext)
    const { cart, addToCart } = useContext(CartContext)


    return (
        <div className="containerProducts">
            <h1 className="title-products">Products</h1>
            <div className="products">
                {products?.map((product) => {
                    const productInCart = cart.find((item) => item.id === product.id)
                    const quantity = productInCart?.quantity || 0

                    return (
                        <div className="containerItemProduct" key={product.id}>
                            <div className="cart-icon-wrapper">
                                <img 
                                    onClick={() => addToCart(product)}
                                    className="cart-icon"
                                    src={addCartIcon}
                                    alt="Icon to add product to cart"
                                    />
                                    {quantity > 0 && (
                                        <span className="product-count">{quantity}</span>
                                    )}
                            </div>

                            <Link to={`/product/${String(product.id)}`} className="fullLink">                        
                                <img className="image-products" src={product.images[0]} alt={product.name}/>
                                <h3 className="name-products">{product.name}</h3>
                                <p className="description-product">{product.description}</p>
                                <p className="price-products">
                                    Price: 
                                    <span className="price">
                                        {formatearPrecio(product.price)}
                                    </span>
                                </p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
