import styled from 'styled-components';

import {
  UserName as UserNameElement,
  UserNickname as UserNicknameElement,
  UserProfile as UserProfileElement
} from '@/elements/User';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const UserProfileContainer = styled.div`
  flex: 1 1 0;
  margin: 0px 30px 0px 0px;
`;

export const UserProfile = styled(UserProfileElement)`
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const UserDesc = styled.div`
  display: flex;
  flex: 2 1 0;
  flex-basis: 30px;
  flex-direction: column;
`;

export const Row = styled.div`
  margin-bottom: 20px;
`;

export const EditBtn = styled.button`
  padding: 5px 9px;
  border: 1px solid rgb(var(--ig-stroke));
  margin-left: calc(var(--base-unit) * 5);
  background-color: transparent;
  color: rgb(var(--ig-secondary-button));
  font-size: 14px;

  font-weight: var(--font-weight-system-semibold);
`;

export const Settings = styled.button`
  padding: 8px;
  margin-left: 5px;
`;

export const First = styled(Row)`
  display: flex;
  align-items: center;
`;

export const UserNickname = styled(UserNicknameElement)`
  font-size: var(--system-28-font-size);
`;

export const Second = styled(Row)`
  display: flex;
`;

export const UserName = styled(UserNameElement)`
  margin-bottom: 5px;
  font-weight: var(--font-weight-system-semibold);
`;

export const Last = styled.div`
  display: flex;
  flex-direction: column;
`;
