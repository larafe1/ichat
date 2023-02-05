import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
  }

  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: User;
  }
}
