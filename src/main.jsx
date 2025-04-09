import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider } from './context/Categories.jsx'
import { ProductsToBuyProvider } from './context/ProductsToBuyContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CategoryProvider>
    <ProductsToBuyProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsToBuyProvider>
  </CategoryProvider>
)
