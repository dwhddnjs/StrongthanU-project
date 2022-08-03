import { gql } from 'apollo-server';

const typeDefs = gql`
  type Ranker {
    tier: String!
    nickname: String!
    gender: String!
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
  }

  input RankerInput {
    nickname: String!
    gender: String!
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
  }

  type Query {
    allRankers: [Ranker!]!
  }

  type Mutation {
    addRanker(rankerInput: RankerInput): Ranker!
  }
`;

export default typeDefs;
