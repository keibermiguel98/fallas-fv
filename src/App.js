import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom/dist'
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Profile from "views/examples/Profile";
import ProductosAdd from "views/examples/ProductosAdd";
import { app } from 'database/firebase';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const App = () => {

    const Auth = getAuth(app)
    const [usuario,setUsuario] = useState(null)
    
    onAuthStateChanged(Auth,(usuarioFirebase)=>{
      if(usuarioFirebase){
        setUsuario(usuarioFirebase)
      }else{
        setUsuario(null)
      }
      console.log(usuario)
    })
    

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/admin/profile" element={<Profile/>}/>
      <Route path="/admin/productos/new-product" element={<ProductosAdd/>}/>

      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
