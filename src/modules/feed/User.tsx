import type { UserProps } from '@components/User';

import UserComponent from '@components/User';

const User = ({ userInfo }: UserProps) => {
  return (
    <UserComponent userInfo={userInfo}>
      <UserComponent.RoundProfile />
      <UserComponent.RoundProfile />
    </UserComponent>
  );
};

export default User;
