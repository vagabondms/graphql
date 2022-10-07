import type { NextPage } from 'next';

import { getApolloServerSideProps } from '@apollo/withApollo';

const Home: NextPage = () => {
  return <div>Home</div>;
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
