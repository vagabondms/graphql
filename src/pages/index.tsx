import type { NextPage } from 'next';

import { getApolloServerSideProps } from '@/apollo/withApollo';
import DefaultLayout from '@/layouts/Main';
import Login from '@/templates/Login';

const Home: NextPage = () => {
  const login = false;

  if (login) {
    return <DefaultLayout>Home</DefaultLayout>;
  }
  return <Login />;
};

export default Home;

export const getServerSideProps = getApolloServerSideProps(async client => {
  console.log(client);
  // await client.query({
  //   query: GET_DIE
  // });
});
