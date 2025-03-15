import {useState,useContext,createContext} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn ] = useState(
        !!localStorage.getItem('accessToken')     //!! is used to check the item and mention true
    )
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}} >
        {children}
    </AuthContext.Provider>
  )
}       

export default AuthProvider
export {AuthContext,AuthProvider}

