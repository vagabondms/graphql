import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { GetServerSidePropsContext } from 'next';

import type { AppProps } from 'next/app';

type PageProps = AppProps['pageProps'] & {
  initialCache?: NormalizedCacheObject;
};

const initializeApolloClient = (
  initialCache?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    uri: 'http://localhost:3001/api/graphql',
    cache: new InMemoryCache().restore(initialCache ?? {})
  });
};

/**
 * next-app 전체에 주입될 client를 만드는 부분.
 * _app에서 pageProps를 받으면, getApolloServerSideProps에서 넘어온 initialCache를 이용해 최초 cache를 세팅함.
 * @param ApolloCache getApolloServerSideProps(서버에서)에서 세팅된 cache
 * @returns ApolloClient ApolloProvider에 인자로 주입될 Client
 */
export const createClient = ({
  initialCache
}: PageProps): ApolloClient<NormalizedCacheObject> => {
  const client = initializeApolloClient(initialCache ?? {});
  return client;
};

/**
 * getServerSide에서 일반적인 async 함수를 쓰지 않고 해당 함수를 써야함.
 * @param callback ApolloClient가 첫번째 인자로, context(일반적인 NextContext)를 두번째 인자로 받는 콜백.
 * @returns props initialCache를 props에 넣음. 해당 부분을 createClient에서 받아서 사용
 */
export const getApolloServerSideProps = <T,>(
  callback: (
    client: ApolloClient<NormalizedCacheObject>,
    context: GetServerSidePropsContext
  ) => Promise<{
    props: T;
  } | void>
): ((context: GetServerSidePropsContext) => Promise<{ props: PageProps }>) => {
  return async (context: GetServerSidePropsContext) => {
    const client = initializeApolloClient();
    const result = await callback(client, context);
    const initialCache = client.cache.extract();

    if (typeof result === 'object' && 'props' in result) {
      return {
        props: {
          initialCache,
          ...result.props
        }
      };
    }

    return {
      props: {
        initialCache
      }
    };
  };
};
