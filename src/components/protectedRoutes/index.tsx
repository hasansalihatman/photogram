import * as React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = () => {
  // used firebase hooks to solve each reloding the page the auth state is lost
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if(loading) {
    return <p>Loading...</p>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
