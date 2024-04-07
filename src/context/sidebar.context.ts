import { createContext } from "react";

const expanded: boolean = true;
const setExpanded: React.Dispatch<React.SetStateAction<boolean>> = () => { };

export const sidebarContext = createContext({
    expanded,
    setExpanded
})