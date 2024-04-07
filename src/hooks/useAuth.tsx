import { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
// import { doLogout } from "../services/auth";

type User = {
  _id: string;
  name: string;
  email: string;
};

function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");

    if (tokenString) {
      // const token = JSON.parse(tokenString);
      // setUser(jwtDecode(token) as User);
      setUser({ _id: "admin123", name: "Admin", email: "admin@street.comm" });
    } else {
      setUser(null);
    }
  }, []);

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    // await doLogout().catch((error) => {
    //   console.log(error);
    // });
  };

  const isAuthenticated = !!user;

  return { user, logout, isAuthenticated };
}

export default useAuth;
