import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarContext } from "@/context/sidebar.context";
import { authContext } from "@/context/auth.context";
import useAuth from "@/hooks/useAuth";
import { Button } from "./ui/button";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { menus } from "@/lib/constants";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [activeMenu, setActiveMenu] = useState(1);

  const { logout } = useAuth();
  const { setAuth } = useContext(authContext);

  const navigate = useNavigate();

  const handleSelect = (menu: { id: number; href: string }) => {
    setActiveMenu(menu.id);
    navigate(menu.href);
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-28" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <sidebarContext.Provider
          value={{ expanded, setExpanded, activeMenu, setActiveMenu }}
        >
          <ul className="flex-1 px-3">
            {menus.map((menu) => (
              <SidebarItem
                key={menu.id}
                icon={<menu.icon />}
                text={menu.name}
                active={activeMenu === menu.id}
                handleSelect={() => handleSelect(menu)}
              />
            ))}
          </ul>
        </sidebarContext.Provider>

        <div className="border-t flex p-3">
          <Button
            variant="default"
            className="w-full"
            onClick={() => {
              logout();
              setAuth(false);
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({
  icon,
  text,
  active,
  handleSelect,
}: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  handleSelect?: () => void;
}) {
  const { expanded } = useContext(sidebarContext);
  return (
    <li
      onClick={handleSelect}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
          : "hover:bg-blue-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0 truncate"
        }`}
      >
        {text}
      </span>
      {!expanded && (
        <div
          className={`absolute min-w-max left-full rounded-md px-2 py-1 ml-5 bg-blue-100 text-blue-800 text-sm opacity-20 invisible -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}