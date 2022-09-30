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

const initializeApolloClient = (initialCache?: NormalizedCacheObject) =>
  new ApolloClient({
    uri: 'http://localhost:3001/api/graphql',
    cache: new InMemoryCache().restore(initialCache ?? {})
  });

export const createClient = ({ initialCache }: PageProps) => {
  const client = initializeApolloClient(initialCache ?? {});
  return client;
};

export const getApolloServerSideProps = (
  cb: (
    client: ApolloClient<NormalizedCacheObject>,
    context: GetServerSidePropsContext
  ) => Promise<{
    props: any;
  }>
) => {
  const client = initializeApolloClient();

  return async (context: GetServerSidePropsContext) => {
    const { props } = await cb(client, context);
    const initialCache = client.cache.extract();
    return {
      props: {
        initialCache,
        ...props
      }
    };
  };
};
