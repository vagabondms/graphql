import { gql } from '@apollo/client';

export const ROLL_ONCE = gql`
  query rollOnce {
    getDie(numSides: 6) {
      rollOnce
    }
  }
`;

export const GET_NUM = gql`
  query getDie {
    getDie(numSides: 6) {
      numSides
    }
  }
`;
