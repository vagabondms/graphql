import { NextPage } from 'next';

import { getApolloServerSideProps } from '@apollo/withApollo';
import UserProfile from 'src/templates/UserProfile';
import { User } from 'src/types/user';

interface PageProps {
  userInfo: Partial<User>;
}

const UserPage: NextPage<PageProps> = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default UserPage;

export const getServerSideProps = getApolloServerSideProps<PageProps>(
  async client => {
    console.log(client);
    return {
      props: {
        userInfo: {}
      }
    };
  }
);
