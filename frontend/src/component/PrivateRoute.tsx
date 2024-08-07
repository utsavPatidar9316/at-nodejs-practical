import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/");
    } else {
      <Outlet />;
    }
  }, [navigate]);

  return <Outlet />;
};

export default PrivateRoute;
