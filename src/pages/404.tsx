import { NextPage } from 'next';
import Link from 'next/link';

import DefaultLayout from '@/layouts/Main';

const NotFound: NextPage = () => {
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

export default NotFound;
