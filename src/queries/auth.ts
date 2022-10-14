import { gql } from '@apollo/client';

export const REISSUE_A_TOKEN = gql`
  query reissueAToken($refreshToken: String!) {
    token
  }
`;

export const LOG_IN = gql`
  query login($id: String!, $password: String) {
    accessToken
    refreshToken
  }
`;

export const LOG_OUT = gql`
  query logOut {
    accessToken
    refreshToken
  }
`;
