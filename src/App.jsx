import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { PageLogin } from './pages/pageLogin/PageLogin.jsx'
import { SignUp } from './components/singUp/SignUp';
import { ProtectedRoute } from './components/ProtectedRouter.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartPage } from './pages/cart/cartPage.jsx';
import { ProductsToBuy } from './components/productsToBuy/productsToBuy.jsx';
import { MyProducts } from './components/myProducts/myProducts.jsx';
import { ProductCardPage } from './pages/productCardPage/productCardPage.jsx';
import { Layout } from './Layout.jsx';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace/>} />
      
      <Route path="/login" element={<PageLogin />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route element={<ProtectedRoute/>}>
        <Route element={<Layout/>}>      
          <Route path='/products-to-buy-page' element={<ProductsToBuy/>}/>
          <Route path='/my-products' element={<MyProducts/>}/>
        </Route>
        
        <Route path='/product/:id' element={<ProductCardPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Route>

    </Routes>
  );
}

export default App
