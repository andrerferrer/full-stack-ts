import { Resolvers } from "./resolvers-types.generated"
import Db from "./db"
export interface TwitterResolverContext {
  db: Db
}

import Query from './resolvers/Query'

const resolvers: Resolvers<TwitterResolverContext> = {
  Query
}

export default resolvers
