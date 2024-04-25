import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const userActive = useSelector(state=>state.auth)

export const ProtectedRoute = ({children}) => {
   if(!userActive){
     return <Navigate to={"/auth"}/>
   }
   

  return children
}

