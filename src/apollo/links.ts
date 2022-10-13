import { ApolloLink } from '@apollo/client';

// import { useGlobalLoadingContext } from './globalLoading';

export const logger = new ApolloLink((operation, forward) => {
  return forward(operation).map(data => {
    // Called after server responds
    const time = Date.now() - operation.getContext().start;
    console.log(
      `Operation ${operation.operationName} took ${time} to complete`
    );
    return data;
  });
});

export const globalLoading = new ApolloLink((operation, forward) => {
  /**
   * queueing 필요
   * 이때, loading이 필요없는 것과 필요한 것을 나누어야함. 방법이 있을지 모르겠네....????
   * contextValue?
   */

  //   const { value, toggle } = useGlobalLoadingContext();

  return forward(operation).map(data => {
    return data;
  });
});
