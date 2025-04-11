import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductsToBuyContext } from "../../context/ProductsToBuyContext"
import './checkout.css'
import { useCheckout } from "../../hooks/useCheckout"

export const Checkout = () => {
    const { formatearPrecio } = useContext(ProductsToBuyContext)
    const { totalQuantity, cart } = useContext(CartContext)
    const { handleCheckout } = useCheckout()

    
    return (
        <div className="cart-summary">
        <h2>Resumen de compra</h2>
        <p>Total productos: {cart.length}</p>
    
        <p>Total a pagar: <strong>{formatearPrecio(totalQuantity)}</strong></p>
        <button 
            className="btn-checkout"
            onClick={handleCheckout}
        >
            Finalizar compra
        </button>
    </div>
    )
}