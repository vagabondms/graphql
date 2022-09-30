import type { NextPage } from 'next';

import { getApolloServerSideProps } from '@apollo/withApollo';
import ExampleComponent from '@components/common/ExampleComponent';
import { GET_DIE } from 'src/queries/example';

const Home: NextPage = () => (
  <div>
    <ExampleComponent />
  </div>
);

export default Home;

export const getServerSideProps = getApolloServerSideProps(async client => {
  await client.query({
    query: GET_DIE
  });
  return {
    props: {}
  };
});
