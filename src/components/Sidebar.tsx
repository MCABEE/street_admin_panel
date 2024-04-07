import { useContext, useState } from "react";
import { sidebarContext } from "@/context/sidebar.context";
import { authContext } from "@/context/auth.context";
import useAuth from "@/hooks/useAuth";
import { Button } from "./ui/button";
import { ChevronFirst, ChevronLast } from "lucide-react";
import logo from "../assets/logo.png";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  const { logout } = useAuth();
  const { setAuth } = useContext(authContext);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <sidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="flex-1 px-3">{children}</ul>
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

export function SidebarItem({
  icon,
  text,
  active,
  alert = false,
}: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  alert?: boolean;
}) {
  const { expanded } = useContext(sidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
