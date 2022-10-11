import { NextPage } from 'next';
import Link from 'next/link';

import type { User } from '@type/user';

import { getApolloServerSideProps } from '@apollo/withApollo';
import DefaultLayout from '@layouts/Default';
import UserProfile from 'src/components/templates/UserProfile';

interface PageProps {
  userInfo: Partial<User>;
}

const UserPage: NextPage<PageProps> = ({ userInfo }) => {
  console.log(userInfo);

  if (userInfo) {
    return (
      <DefaultLayout>
        <UserProfile />
      </DefaultLayout>
    );
  }
  return (
    <DefaultLayout>
      <div>
        <h2>죄송합니다. 페이지를 사용할 수 없습니다.</h2>
        <div>
          <div>
            클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.
            <Link href="/" role="link">
              Instagram으로 돌아가기.
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
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
