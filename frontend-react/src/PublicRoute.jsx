import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // If the user is logged in, navigate to the dashboard, otherwise render the children components (e.g., Login, Register)
  return !isLoggedIn ? (
    children  // Properly render the children components
  ) : (
    <Navigate to='/dashboard' /> // Redirect logged-in users to the dashboard
  );
}

export default PublicRoute;
