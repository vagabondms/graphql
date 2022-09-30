import { gql } from '@apollo/client';

export const GET_DIE = gql`
  query getDie {
    getDie(numSides: 6) {
      rollOnce
    }
  }
`;
