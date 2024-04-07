import { createContext } from "react";

const auth: boolean = false;
const setAuth: React.Dispatch<React.SetStateAction<boolean>> = () => { };

export const authContext = createContext({
    auth,
    setAuth
});