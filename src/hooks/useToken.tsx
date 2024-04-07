import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token") as string;
    return JSON.parse(tokenString);
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };
  return {
    token,
    setToken: saveToken,
  };
};

export default useToken;
