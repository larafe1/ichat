import { createContext, useCallback, useContext } from "react";

import {
  signIn as signInHandler,
  signOut as signOutHandler,
} from "next-auth/react";

import { AUTH_CONFIG } from "@/constants";

import type { AuthContextProps, AuthProviderProps } from "./types";

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const signIn = useCallback(async () => {
    try {
      await signInHandler(AUTH_CONFIG.Providers.Google);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await signOutHandler();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const ctx = useContext(AuthContext);

  return ctx;
};

export { AuthProvider, useAuth };
