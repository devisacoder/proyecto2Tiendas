import { useContext } from "react"
import { ProductsToBuyContext } from "../../context/ProductsToBuyContext"
import './productCard.css'
import { useParams } from "react-router-dom"

export const ProductCard = () => {
    const { id } = useParams()
    const { products, formatearPrecio } = useContext(ProductsToBuyContext) 

    const filteresProduct = products.filter((product) => product.id === Number(id))
    
    return(
        <div className="productCard_container">
            {filteresProduct.map((product) => (
                <div className="productCard_containerItemProduct" key={product.id}>
    `               <div>
                        <img className="productCard_imageProduct" loading="lazy" src={product.images[0]} alt={product.name} />
                    </div>
                    <div className="productCard_containerInfo">
                        <h3 className="productCard_nameProduct">{product.name}</h3>
                        <div className="productCard_containerPrice">
                                {product.discount > 0 && 
                                    <p className="discount">
                                        Before: {formatearPrecio(product.discount)}
                                    </p>
                                }
                                <p className="price">
                                    Price: {formatearPrecio(product.price)}
                                </p>
                        </div>                    
                                <p className="productCard_descriptionProduct">{product.description}</p>
                                <button className="productCard_buttonProduct">Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}