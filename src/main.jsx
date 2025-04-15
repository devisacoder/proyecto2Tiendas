import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsToBuyProvider } from './context/ProductsToBuyContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoryProvider } from './context/CategoriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <CategoryProvider>
          <ProductsToBuyProvider>
            <App />
          </ProductsToBuyProvider>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
)
