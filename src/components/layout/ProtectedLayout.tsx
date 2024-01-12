import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../../helper/utils";

function ProtectedLayout() {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedLayout;
