import { gql } from 'apollo-server';

const typeDefs = gql`
  type Ranker {
    tier: String!
    nickname: String!
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
  }

  type Query {
    allRankers: [Ranker!]!
  }
`;

export default typeDefs;
