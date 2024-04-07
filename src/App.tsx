import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authContext } from "@/context/auth.context";
import useAuth from "@/hooks/useAuth";
import Login from "@/pages/login";
import Layout from "@/pages/dashboard/Layout";
import Dashboard from "@/pages/dashboard";

function App() {
  const { isAuthenticated } = useAuth();
  const [auth, setAuth] = useState(isAuthenticated);

  useEffect(() => setAuth(isAuthenticated), [isAuthenticated]);

  // console the count of the number of times the page is rendered
  // const countRender = useRef(0);
  // useEffect(() => {
  //   countRender.current += 1;
  //   console.log(`Render Count: ${countRender.current}`);
  // }, []);

  return (
    <BrowserRouter>
      <authContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="/users"
              element={<h1 className="text-3xl">Users</h1>}
            />
          </Route>
          <Route
            path="*"
            element={<h1 className="text-3xl">Page Not Found</h1>}
          />
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
