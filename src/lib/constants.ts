import { Building2, DatabaseZap, Home, Settings, Users } from "lucide-react";

const menus = [
    { id: 1, name: "Dashboard", href: "/", icon: Home },
    { id: 2, name: "Users", href: "/users", icon: Users },
    { id: 3, name: "Business", href: "/business", icon: Building2 },
    { id: 4, name: "Data Manager", href: "/data-manager", icon: DatabaseZap },
    { id: 5, name: "Settings", href: "/settings", icon: Settings },
];

export { menus }