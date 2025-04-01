// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { lazy } from 'react'
import './App.css'
import { SidebarCategories } from './components/sidebarCategories/sidebarCategories';
// import { PageLogin } from './pages/PageLogin'
// import { Suspense } from 'react'

// import { SignUp } from './components/singUp/SignUp';

function App() {
  return (
    <SidebarCategories/>
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
