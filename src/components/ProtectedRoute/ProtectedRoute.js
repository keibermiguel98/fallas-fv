import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({user,children})=>{
   if(user === ""){
    console.log('no se encuentra user')
    return <Navigate to="/auth"/>
   }
  return children
}