import { gql } from "@apollo/client";

export const userOperations = {
  Queries: {},
  Mutations: {
    createUser: gql`
      mutation CreateUser($username: String!) {
        createUser(username: $username) {
          success
          error
        }
      }
    `,
  },
  Subscriptions: {},
};
