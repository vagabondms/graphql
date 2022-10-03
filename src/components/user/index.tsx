import type { HTMLAttributes } from 'react';
import type { User as UserType } from 'src/types/user';

import { RoundProfile, SquareProfile } from './Profile';
import UserContext from './context';

export interface UserProps extends HTMLAttributes<HTMLDivElement> {
  userInfo: Partial<UserType>;
}

const User = ({ userInfo, children }: UserProps) => {
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default User;

User.RoundProfile = RoundProfile;
User.SquareProfile = SquareProfile;