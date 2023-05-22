import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("dataLoginNavbar"));
    if ((login && login.isUser === true) || (login && login.isAdmin === true)) {
      setIsAdmin(login);
      setIsUser(login);
    }
  }, []);

  return <>{isUser && isAdmin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
