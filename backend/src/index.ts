import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { createServer } from "node:http";

import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/type-defs";

import { envs } from "./config";

const bootstrap = async () => {
  const app = express();
  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: envs.clientOrigin,
      credentials: true
    }
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: envs.port }, resolve)
  );

  console.log(`\nServer is ready at http://localhost:${envs.port}/graphql`);
};

bootstrap();
