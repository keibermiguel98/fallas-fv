import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({user,children})=>{
   if(!user){
     <Navigate to="/auth"/>
   }
  return children
}