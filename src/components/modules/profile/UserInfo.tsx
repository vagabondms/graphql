import React, { ReactElement } from 'react';

import User, { UserProps } from '@components/elements/User';

const UserInfo = ({ userInfo }: UserProps): ReactElement => {
  return (
    <User userInfo={userInfo}>
      <User.RoundProfile />
      <User.PostCount />
    </User>
  );
};

export default UserInfo;
