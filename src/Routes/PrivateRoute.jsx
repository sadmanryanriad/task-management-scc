/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="w-full text-center mt-12">
        <span className="loading loading-spinner loading-lg text-success text-5xl "></span>
      </div>
    );

  if (!user?.email) return <Navigate to={"/login"}></Navigate>;

  return children;
};

export default PrivateRoute;
