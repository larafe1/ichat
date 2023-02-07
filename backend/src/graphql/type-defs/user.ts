import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: String
    username: String
  }

  type Query {
    findUsers(username: String): [User]
  }

  type Mutation {
    createUser(username: String): CreateUserResponse
  }

  type CreateUserResponse {
    success: Boolean
    error: String
  }
`;

export default typeDefs;
