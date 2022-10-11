import { ReactElement } from 'react';

import User, { UserPostCount, UserQuotes } from '@elements/User';
import { User as UserType } from '@type/user';
import { Gear } from 'src/icons';

import {
  EditBtn,
  First,
  Last,
  Second,
  Settings,
  UserDesc,
  UserName,
  UserNickname,
  UserProfile,
  UserProfileContainer,
  Wrapper
} from './styled';

interface UserInfoProps {
  userInfo: Pick<
    UserType,
    'profileImage' | 'postCount' | 'nickname' | 'name' | 'quotes'
  >;
}

const UserInfo = ({ userInfo }: UserInfoProps): ReactElement => {
  return (
    <Wrapper>
      <User userInfo={userInfo}>
        <UserProfileContainer>
          <UserProfile />
        </UserProfileContainer>
        <UserDesc>
          <First>
            <UserNickname />
            <EditBtn type="button">프로필 편집</EditBtn>
            <Settings type="button">
              <Gear width={20} height={20} />
            </Settings>
          </First>
          <Second>
            <UserPostCount />
          </Second>
          <Last>
            <UserName />
            <UserQuotes />
          </Last>
        </UserDesc>
      </User>
    </Wrapper>
  );
};

export default UserInfo;
