import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cats from "./products/pages/Cats";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Products from "./products/pages/Products";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [token, settoken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    settoken(token);
    setUserId(uid)
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId : uid,
        token : token
      })
      )
  }, []);

  const logout = useCallback(() => {
    settoken(null);
    setUserId(null)
    localStorage.removeItem('userData')
  }, []);


  useEffect(() =>{
    const storedData = JSON.parse(localStorage.getItem('userData'))
    // console.log(!!storedData) // null -> login {userid,token}
    if(storedData && storedData.token){
      login(storedData.userId,storedData.token)
    }
  }, [login])

  let routes;

  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Cats />} />
        <Route path="/:catId/products" element={<Products />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </React.Fragment>
    );
  }else{
    routes = (
      <React.Fragment>
        <Route path="/" element={<Cats />} />
        <Route path="/:catId/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </React.Fragment>
    );
  }
   

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, userId : userId , login: login, logout: logout}}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>
          {routes}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
