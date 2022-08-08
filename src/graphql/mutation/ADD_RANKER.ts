import { gql } from '@apollo/client';

const ADD_RANKER = gql`
  mutation AddRanker($rankerInput: RankerInput) {
    addRanker(rankerInput: $rankerInput) {
      nickname
      body
      squat
      bench
      dead
      gender
    }
  }
`;

export default ADD_RANKER;
