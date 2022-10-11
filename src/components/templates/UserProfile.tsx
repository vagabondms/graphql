import { ReactElement } from 'react';

import UserInfo from '@modules/profile/UserInfo';

const UserProfile = (): ReactElement => {
  return (
    <div>
      <UserInfo
        userInfo={{
          profileImage:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          postCount: 16,
          quotes: '안녕하세요',
          nickname: '닉네임',
          name: '이름'
        }}
      />
    </div>
  );
};

export default UserProfile;
