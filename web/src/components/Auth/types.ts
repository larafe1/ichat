import type { Session } from "next-auth";

export type AuthProps = {
  session: Session | null;
  onReloadSession: () => void;
};

export type CreateUserData = {
  createUser: {
    success: boolean;
    error: string;
  };
};

export type CreateUserVariables = {
  username: string;
};
