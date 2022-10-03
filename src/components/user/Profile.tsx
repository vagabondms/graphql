import styled from 'styled-components';

import { useUserContext } from './context';

const RoundProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const RoundProfile = () => {
  const { profileImage } = useUserContext();

  if (typeof profileImage !== 'string') {
    return null;
  }

  return <RoundProfileImage src={profileImage} />;
};

const SquareProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;

const SquareProfile = () => {
  const { profileImage } = useUserContext();
  if (typeof profileImage !== 'string') {
    return null;
  }
  return <SquareProfileImage src={profileImage} />;
};

export { RoundProfile, SquareProfile };
