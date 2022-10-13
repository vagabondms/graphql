import { ReactElement } from 'react';

import UserComponent, { UserProfile, UserProps } from '@/elements/User';

const User = ({ userInfo }: UserProps): ReactElement => {
  return (
    <UserComponent userInfo={userInfo}>
      <UserProfile />
    </UserComponent>
  );
};

export default User;
