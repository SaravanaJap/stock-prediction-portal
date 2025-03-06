import { Children, useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate } from "react-router-dom"

const PublicRoute = () => {
    const {isLoggedIn} = useContext(AuthContext)
  return !isLoggedIn ? (
    Children
  ) : (
    <Navigate to='/dashboard/' />
  )
}

export default PublicRoute