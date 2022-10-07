import type { NextPage } from 'next';

import { getApolloServerSideProps } from '@apollo/withApollo';
import DefaultLayout from '@layouts/Default';

const Home: NextPage = () => {
  const login = true;
  if (login) {
    return <DefaultLayout>Home</DefaultLayout>;
  }
  return <div> needs login</div>;
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
