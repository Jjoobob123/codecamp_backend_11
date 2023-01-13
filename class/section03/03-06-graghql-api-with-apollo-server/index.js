import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        qqq: String
    }
`

const resolvers = {
    Query:{
        qqq: () => {
            return "Hello world"
        }
    }

}

const server = new ApolloServer ({
    typeDefs,
    resolvers,
    cors: true
})

startStandaloneServer(server) //4000