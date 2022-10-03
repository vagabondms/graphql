import type { NextPage } from 'next';

import UserPage from './user/[idx]';

import { getApolloServerSideProps } from '@apollo/withApollo';

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
