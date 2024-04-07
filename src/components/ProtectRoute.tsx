import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authContext } from "@/context/auth.context";

function ProtectRoute() {
  const { auth } = useContext(authContext);

  const location = useLocation();
  return auth ? (
    //  {/* <Navbar /> */}
    //   {/* </Sidebar> */}
    <main className="bg-slate-100 min-h-screen w-full p-5 overflow-auto">
      <Outlet />
    </main>
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  );
}

export default ProtectRoute;
