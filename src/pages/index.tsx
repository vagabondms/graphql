import type { NextPage } from 'next';

import { getApolloServerSideProps } from '@apollo/withApollo';

import UserPage from './user/[idx]';

const Home: NextPage = () => {
  return <UserPage />;
};

export default Home;

export const getServerSideProps = getApolloServerSideProps(async client => {
  console.log(client);
  // await client.query({
  //   query: GET_DIE
  // });
  return {
    props: {}
  };
});
