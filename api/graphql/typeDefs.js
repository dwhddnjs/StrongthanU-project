import { gql } from 'apollo-server';

const typeDefs = gql`
  type Ranker {
    nickname: String!
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
    gender: String
  }

  input RankerInput {
    gender: String!
    nickname: String!
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
  }

  type Query {
    allRankers: [Ranker!]!
    filterGenderRankers(gender: String): [Ranker!]!
  }

  type Mutation {
    addRanker(rankerInput: RankerInput): Ranker!
  }
`;

export default typeDefs;
