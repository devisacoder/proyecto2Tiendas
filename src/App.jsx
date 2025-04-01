// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { lazy } from 'react'
import { Home } from './pages/home/home';
// import { Suspense } from 'react'
// import { PageLogin } from './pages/pageLogin/PageLogin.jsx'

// import { SignUp } from './components/singUp/SignUp';

function App() {
  return (
    <Home/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/Login" />} />
    //     <Route path="/Login" element={<PageLogin />} />
    //     <Route path="/SignUp" element={<SignUp />} />
    //   </Routes>
    // </Router>
  );
}

export default App
