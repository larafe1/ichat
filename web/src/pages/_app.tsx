import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, type ThemeConfig } from "@chakra-ui/react";

import { apolloClient } from "@/graphql/ApolloClient";
import { AuthProvider } from "@/hooks";
import { customTheme } from "@/styles/theme";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ChakraProvider
      theme={{
        ...customTheme,
        config: {
          initialColorMode: "dark",
          useSystemColorMode: false,
        } as ThemeConfig,
      }}
    >
      <ApolloProvider client={apolloClient}>
        <SessionProvider session={session}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </SessionProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
