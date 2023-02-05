import type { Session } from "next-auth";

export type AuthProps = {
  session: Session | null;
  onReloadSession: () => void;
};
