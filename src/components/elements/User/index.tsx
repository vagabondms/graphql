import type { HTMLAttributes, ReactElement } from 'react';
import type { User as UserType } from 'src/type/user';

import UserContext from './context';

export interface UserProps extends HTMLAttributes<HTMLDivElement> {
  userInfo: Partial<UserType>;
}

const User = ({ userInfo, children }: UserProps): ReactElement => {
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default User;

export {
  UserPostCount,
  UserNickname,
  UserName,
  UserQuotes
} from './components/Infos';

export { UserProfile } from './components/Profiles';
