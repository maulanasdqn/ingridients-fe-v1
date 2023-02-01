import useAuth from "@hooks/Auth/useAuth";
import ApiService from "@service/Api";
import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { CommonInterface } from "@util/interfaces/Common";

const Auth: FC<CommonInterface> = ({ children }): ReactElement => {
  const isAuthenticated = useAuth();
  const Location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: Location }} replace />;
  } else {
    ApiService.setHeader();
    ApiService.mount401Interceptor();
    return <>{children}</>;
  }
};

export default Auth;
