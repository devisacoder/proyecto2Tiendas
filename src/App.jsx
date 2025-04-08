import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { lazy } from 'react'
import { Home } from './pages/home/home';
import { Suspense } from 'react'
import { PageLogin } from './pages/pageLogin/PageLogin.jsx'

import { SignUp } from './components/singUp/SignUp';
import { ProtectedRoute } from './components/ProtectedRouter.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ProductCardPage } from './pages/productCardPage/productCardPage.jsx';

function App() {
  return (
    <Router>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace/>} />
          
          <Route path="/login" element={<PageLogin />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route element={<ProtectedRoute/>}>
          </Route>

            <Route path='/home' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductCardPage/>} />
        </Routes>
      </AuthProvider>
      
    </Router> 
  );
}

export default App
