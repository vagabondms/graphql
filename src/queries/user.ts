import { gql } from '@apollo/client';

const getUser = gql`
  query getUser {
    someField
  }
`;

export { getUser };
