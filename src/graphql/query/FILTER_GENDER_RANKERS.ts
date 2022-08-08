import { gql } from '@apollo/client';
const FILTER_GENDER_RANkERS = gql`
  query FilterGenderRankers {
    womanRankers {
      nickname
      gender
      body
      squat
      dead
      bench
    }
    manRankers {
      nickname
      gender
      body
      squat
      bench
      dead
    }
  }
`;

export default FILTER_GENDER_RANkERS;
