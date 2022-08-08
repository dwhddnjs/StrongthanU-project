import { gql } from '@apollo/client';

const ALL_RANKERS = gql`
  query AllRankers {
    allRankers {
      nickname
      gender
      body
      bench
      squat
      dead
    }
  }
`;

export default ALL_RANKERS;
