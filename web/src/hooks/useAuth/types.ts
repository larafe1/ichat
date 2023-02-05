import type { ReactNode } from "react";

export type AuthContextProps = {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export type AuthProviderProps = {
  children: ReactNode;
};
