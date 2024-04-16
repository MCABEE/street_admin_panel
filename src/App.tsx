import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { authContext } from "@/context/auth.context";
import useAuth from "@/hooks/useAuth";
import Login from "@/pages/login";
import Layout from "@/pages/dashboard/Layout";
import Dashboard from "@/pages/dashboard";
import DataManager from "./pages/dashboard/data-manager";
import BusinessCategory from "./pages/dashboard/data-manager/business-category";

function App() {
  const { isAuthenticated } = useAuth();
  const [auth, setAuth] = useState(isAuthenticated);

  useEffect(() => setAuth(isAuthenticated), [isAuthenticated]);

  return (
    <BrowserRouter>
      <authContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/business" element={<h1>Businesses</h1>} />
            <Route path="/agents" element={<h1>Agents</h1>} />
            <Route path="/data-manager" element={<Outlet />}>
              <Route index element={<DataManager />} />
              <Route path="business-category/:page" element={<BusinessCategory />} />
              <Route path="business-type" element={<h1>Business Type</h1>} />
              <Route path="location" element={<h1>Geo Location</h1>} />
              <Route
                path="product-catalogue"
                element={<h1>Product Catalogue</h1>}
              />
            </Route>
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
