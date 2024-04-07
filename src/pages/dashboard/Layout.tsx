import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authContext } from "@/context/auth.context";
import Sidebar from "@/components/Sidebar";
import { SidebarItem } from "@/components/Sidebar";
import { Home, Users, Building2, Settings, DatabaseZap } from "lucide-react";

function Layout() {
  const { auth } = useContext(authContext);

  const location = useLocation();
  return auth ? (
    <div className="flex overflow-auto">
      <Sidebar> 
        <SidebarItem icon={<Home />} text="Dashboard" active alert />
        <SidebarItem icon={<Users />} text="Users" active={false}  />
        <SidebarItem icon={<Building2 />} text="Business" active={false}  />
        <SidebarItem icon={<DatabaseZap />} text="Data Manager" active={false} />
        <SidebarItem icon={<Settings />} text="Settings" active={false}  />
      </Sidebar>
      <main className="p-5 w-full h-screen overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  );
}

export default Layout;
