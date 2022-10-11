import { ImgHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import { useUserContext } from '../context';

const RoundProfileImage = styled.img`
  border-radius: 50%;
`;

interface RoundProfileProps extends ImgHTMLAttributes<HTMLImageElement> {}

const UserProfile = (props: RoundProfileProps): ReactElement | null => {
  const { profileImage } = useUserContext();

  if (typeof profileImage !== 'string') {
    return null;
  }

  return <RoundProfileImage src={profileImage} {...props} />;
};

export { UserProfile };
