import { ReactElement } from 'react';

import UserInfo from '@modules/profile/UserInfo';

const UserProfile = (): ReactElement => {
  return (
    <div>
      <UserInfo
        userInfo={{
          profileImage:
            'https://cdn.ggumim.co.kr/storage/20220404111013xGLztEbcjz.png',
          postCount: 16
        }}
      />
    </div>
  );
};

export default UserProfile;
