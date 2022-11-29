import { createContext } from "react";

export const AuthContext = /* `createContext` is a function that returns an object with two properties:`Provider` and `Consumer`. */
createContext({
  isLoggedIn: false,
  token: null,
  userId : null,
  login: () => {},
  logout: () => {},
});

/**
 * Context provides a way to pass data through the component 
 * tree without having to pass props down manually at every level
 */