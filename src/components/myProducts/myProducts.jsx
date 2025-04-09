import { useMyProducts } from "../../hooks/useMyProducts"
import '../productsToBuy/productsToBuy.css'

export const MyProducts = () => {
    const { filteredProducts } = useMyProducts()
    
    return(
        <div className="containerProducts">
        <h1 className="title-products">My Products</h1>
        <div className="products">
          {filteredProducts?.map((product) => (
            <div className="containerItemProduct" key={product.id}>
              <img
                className="image-products"
                src={product.images[0]}
                alt={product.name}
              />
              <h3 className="name-products">{product.name}</h3>
              <p className="description-product">{product.description}</p>
              <p className="price-products">
                Price: <span className="price">{product.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
  
    )
}