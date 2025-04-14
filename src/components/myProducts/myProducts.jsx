import { useContext } from "react"
import { useMyProducts } from "../../hooks/useMyProducts"
import '../productsToBuy/productsToBuy.css'
import { CategoryContext } from "../../context/Categories"
import { Link } from "react-router-dom"

export const MyProducts = () => {
    const { filteredProducts } = useMyProducts()
    const { selectedCategory, clearSelectedCategory } = useContext(CategoryContext)
    
    return(
        <div className="containerProducts">
          <div className="titles-container">
            <h1 className="title-products">My Products</h1> 
            {selectedCategory && (
                <button onClick={clearSelectedCategory} className="reset-button">
                  Show all products                
                </button>
            )}
          </div>
        <div className="products">
          {filteredProducts?.map((product) => (
            <Link
              className="containerItemProduct" 
              key={product.id}
              to={`/store-product/${product.id}`}
            >
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
            </Link>
          ))}
        </div>
      </div>
  
    )
}