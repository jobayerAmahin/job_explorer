import { useContext } from "react"
import { AuthContext } from "../AuthFiles/AuthProvider"

const useAuth=()=>{
    const contextData=useContext(AuthContext)
    return contextData;
}

export default useAuth;