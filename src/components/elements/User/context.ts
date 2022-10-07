import { createContext, useContext } from 'react';

import type { User } from 'src/type/user';

const UserContext = createContext<null | Partial<User>>(null);

const useUserContext = (): Partial<User> => {
  const user = useContext(UserContext);
  if (!user) {
    throw Error('User 컴포넌트의 child로 사용하세요');
  }
  return user;
};

export { useUserContext };

export default UserContext;
