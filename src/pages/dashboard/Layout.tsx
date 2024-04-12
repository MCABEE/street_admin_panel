import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authContext } from "@/context/auth.context";
import Sidebar from "@/components/Sidebar";

function Layout() {
  const { auth } = useContext(authContext);

  const location = useLocation();
  return auth ? (
    <div className="flex">
      <Sidebar />
      <main className="p-5 w-full h-screen overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  );
}

export default Layout;
