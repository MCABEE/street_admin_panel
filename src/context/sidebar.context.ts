import { createContext } from "react";

const expanded: boolean = true;
const setExpanded: React.Dispatch<React.SetStateAction<boolean>> = () => { };
const activeMenu: number = 1;
const setActiveMenu: React.Dispatch<React.SetStateAction<number>> = () => { };

export const sidebarContext = createContext({
    expanded,
    setExpanded,
    activeMenu,
    setActiveMenu
})