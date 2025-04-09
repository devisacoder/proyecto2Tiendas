import { useContext } from "react"
import "./cart.css"
import { CartContext } from "../../context/CartContext"
import { ProductContext } from "../../context/ProductContext"

export const Cart = () => {
    const { formatearPrecio } = useContext(ProductContext)
    const { 
        cart, 
        incrementQuantity, 
        decrementQuantity 
    } = useContext(CartContext)

    const totalQuantity = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

    return (
        <div className="container-cart-page">
            <div className="container-cart">
                <h1 className="title-cart">🛒 Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p className="empty-cart">El carrito está vacío</p>
                ) : (
                    <div className="cart-items">
                            {cart?.map((product, index) => (
                            <div className="cart-item" key={index}>
                                <img src={product.images[0]} alt={product.name} className="cart-image" />
                                <div className="cart-details">
                                    <h3 className="cart-product-name">{product.name}</h3>
                                    <p className="cart-product-price">{formatearPrecio(product.price)}</p>
                                    <p className="cart-product-quantity">Cantidad: {product.quantity}</p>
                                    <div className="cart-quantity-buttons">
                                        <button 
                                            onClick={() => decrementQuantity(product.id)}>
                                            -
                                        </button>
                                        <button 
                                            onClick={() => incrementQuantity(product.id)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
            <div className="cart-summary">
                <h2>Resumen de compra</h2>
                <p>Total productos: {cart.length}</p>
                <p>Total a pagar: <strong>{formatearPrecio(totalQuantity)}</strong></p>
                <button className="btn-checkout">Finalizar compra</button>
            </div>
        </div>
    )
}
