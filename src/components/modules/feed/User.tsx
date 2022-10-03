import { ReactElement } from 'react';

import type { UserProps } from '@components/elements/User';

import UserComponent from '@components/elements/User';

const User = ({ userInfo }: UserProps): ReactElement => {
  return (
    <UserComponent userInfo={userInfo}>
      {/* <UserComponent.RoundProfile /> */}
      <UserComponent.SquareProfile />
    </UserComponent>
  );
};

export default User;
