import { Building2, DatabaseZap, Home, Settings, Users, Contact } from "lucide-react";

const menus = [
    { id: 1, name: "Dashboard", href: "/", icon: Home, },
    { id: 2, name: "Users", href: "/users", icon: Users, },
    { id: 3, name: "Business", href: "/business", icon: Building2, },
    { id: 6, name: "Agents", href: "/agents", icon: Contact, },
    { id: 4, name: "Data Manager", href: "/data-manager", icon: DatabaseZap },
    { id: 5, name: "Settings", href: "/settings", icon: Settings, },
];

const dataManagerMenus = [
    { id: 100, name: "Business Categories", href: "/business-categories" },
    { id: 101, name: "Business Types", href: "/business-types" },
    { id: 102, name: "Locations", href: "/locations" },
];

export { menus, dataManagerMenus }