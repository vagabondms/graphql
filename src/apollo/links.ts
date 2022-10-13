import { ApolloLink, HttpLink, Operation } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { ROLL_ONCE } from '@/queries/example';

/**
 * 에러 로깅
 */
export const errorLogger = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      return console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

/**
 * graphql을 타는 모든 request에 대한 로깅
 */
export const logger = new ApolloLink((operation, forward) => {
  const startTime = Date.now();
  console.log(`Operation ${operation.operationName} starts at ${startTime}`);
  operation.setContext({ start: startTime });

  return forward(operation).map(data => {
    const endTime = Date.now() - operation.getContext().start;
    console.log(
      `Operation ${operation.operationName} took ${endTime} to complete`
    );
    return data;
  });
});

const REISSUE_REQUEST_FLAG = 'reissue_token';

/**
 * token Handler의 방향 결정 함수
 */
const test = (operation: Operation): boolean => {
  return !!operation.getContext()[REISSUE_REQUEST_FLAG];
};

/**
 * accessToken 재발급
 */
const reissueAccessToken = setContext(async (_, prevContext) => {
  /**
   *TODO 여기서의 Request는 에러 핸들링을 어떻게 해야할까...
   */

  const token = prevContext.cache.readQuery({
    query: ROLL_ONCE
  });

  return {
    headers: {
      authorization: token ?? ''
    }
  };
});

/**
 * 기존에 발급받은 토큰을 Header에 추가
 */
const addAccessToken = setContext(async request => {
  if (request.operationName === 'getNum') {
    return;
  }
  const token = localStorage.getItem('token');
  return {
    headers: {
      authorization: token ?? 'fake token'
    }
  };
});

/**
 * header에 토큰 추가 및 token refresh handler
 * */
export const tokenHandler = onError(
  /*
    networkError혹은 graphQLErrors 둘 중 하나를 사용해서 accessToken 만료를 감지해야함
   */

  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors || networkError) {
      operation.setContext({
        [REISSUE_REQUEST_FLAG]: true
      });
      return forward(operation);
    }
  }
).split(test, reissueAccessToken, addAccessToken);

export const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_URI
});
