import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import './products.css'

export const Products = () => {
    const { products, formatearPrecio } = useContext(ProductContext)
    return (
        <div className="containerProducts">
            <h1 className="title-products">Products</h1>
            <div className="products">
                {products?.map((products) => (
                    <div 
                        className="containerItemProduct"
                        key={products.id}
                    >
                        <img className="image-products" src={products.images[0]} alt={products.name}/>
                        <h3 className="name-products">{products.name}</h3>
                        <p className="description-product">{products.description}</p>
                        <p className="price-products">
                            Price: 
                            <span className="price">
                                 {formatearPrecio(products.price)}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}