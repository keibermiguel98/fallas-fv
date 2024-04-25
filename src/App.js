import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Profile from "views/examples/Profile";
import ProductosAdd from "views/examples/ProductosAdd";
import { app } from 'database/firebase';
import { getAuth, onAuthStateChanged} from '@firebase/auth';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';

const App = () => {
    const Auth = getAuth(app)
  
     const Aauth = useSelector(state=> state.auth)
    
    onAuthStateChanged(Auth,(usuarioFirebase)=>{
      console.log('desde App.js:',usuarioFirebase)
    })
    
  return (
    <BrowserRouter>
    <Routes>
         
          <Route path="/auth/*" 
          element={
            <ProtectedRoute user={Aauth}>
               <AuthLayout />
            </ProtectedRoute>
          } />
         
        <Route path="/admin/*" element={
          <ProtectedRoute user={Aauth}>
            <AdminLayout />
          </ProtectedRoute>
        } />

        <Route path="/admin/profile" element={
          <ProtectedRoute user={Aauth}>
             <Profile/>
          </ProtectedRoute>
        
         }/>
        <Route path="/admin/productos/new-product" element={
          <ProtectedRoute user={Aauth}>
            <ProductosAdd/>
          </ProtectedRoute>
        }/>

        <Route path="*" element={
          <ProtectedRoute user={Aauth}>
            <Navigate to="/admin/index" replace />
          </ProtectedRoute>      
        } />
    </Routes>
  </BrowserRouter>
  )
}

export default App
