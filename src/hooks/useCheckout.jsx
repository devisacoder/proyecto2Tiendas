import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export const useCheckout = () => {
    const { cart, clearCart } = useContext(CartContext)
    const navigate = useNavigate()
    
    const token = sessionStorage.getItem("token")

    console.log("Token:", token)

    const handleCheckout = async () => {
        const errors = cart
            .filter((product) => product.quantity > product.stock)
            .map(
                (product) => 
                    `The product ${product.name} has only ${product.stock} units available`
            );

            if (errors.length > 0) {
                alert(errors.join("\n"));
                return;
            }

            const purchaseItems = cart.map((product) =>({
                id: product.id,
                quantity: product.quantity,
            }));

            try {
                const response = await fetch("http://localhost:3001/branch/products", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(purchaseItems)
                });
            
                const data = await response.json();

                if (!response.ok) {
                    console.warn("⚠️The server responded with an error, but returned useful data:", data);
                    console.error("There was a problem on the server, but the products were purchased correctly.");
                } else {
                    alert("Shopping cart purchased successfully");
                    clearCart();
                    navigate("/my-products");
                }

            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while purchasing the shopping cart. Try again later");
            }
    }

    return { handleCheckout }
}