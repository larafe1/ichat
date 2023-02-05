import type { BuiltInProviders } from "next-auth/providers";

export const AUTH_CONFIG = {
  RequestTimeoutMs: 10000, // 10 seconds
  Providers: {
    Google: "google" as keyof BuiltInProviders,
  },
};
