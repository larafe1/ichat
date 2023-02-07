import merge from "lodash.merge";

import userResolvers from "./user";

export const resolvers = merge({}, userResolvers);
