import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom/dist'
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Profile from "views/examples/Profile";
import ProductosAdd from "views/examples/ProductosAdd";
import { app } from 'database/firebase';
import { getAuth, onAuthStateChanged} from '@firebase/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const App = () => {
    const Auth = getAuth(app)
  
     const Aauth = useSelector(state=> state.auth)
     console.log(Aauth)
    
    onAuthStateChanged(Auth,(usuarioFirebase)=>{
      console.log('desde App.js:',usuarioFirebase)
    })
    
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/admin/profile" element={<Profile/>}/>
        <Route path="/admin/productos/new-product" element={<ProductosAdd/>}/>
        <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
