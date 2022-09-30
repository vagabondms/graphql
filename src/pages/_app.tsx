import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

import { createClient } from '@apollo/withApollo';
import DefaultLayout from '@components/common/layout/Default';
import theme from '@styles/theme';

import '../styles/reset.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = createClient(pageProps);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>

      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
