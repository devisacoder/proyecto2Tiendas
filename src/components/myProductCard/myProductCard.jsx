import { useParams } from "react-router-dom"
import { useMyProducts } from "../../hooks/useMyProducts"
import { ProductsToBuyContext } from "../../context/ProductsToBuyContext"
import { useContext } from "react"

export const MyProductsCard = () => {
    const { id } = useParams() 
    const { formatearPrecio } = useContext
    (ProductsToBuyContext) 
    const { filteredProducts } = useMyProducts()

    const productById = filteredProducts.filter((products) => products.id === Number(id))    

    return (
        <div className="productCard_container">
            {productById.map((product) => (
                <div className="productCard_containerItemProduct" key={product.id}>
                    <div>
                        <img className="productCard_imageProduct" loading="lazy" src={product.images[0]} alt={product.name} />
                    </div>
                    <div className="productCard_containerInfo">
                        <h3 className="productCard_nameProduct">{product.name}</h3>
                        <div className="productCard_containerPrice">
                                <p className="price">
                                    Price: {formatearPrecio(product.price)}
                                </p>
                        </div>                    
                        <p className="productCard_descriptionProduct">{product.description}</p>
                        <div className="productCard_buttonWrapper">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}