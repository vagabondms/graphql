import { ReactElement, useState } from 'react';

import { ButtonLarge } from '@/elements/common/buttons';
import LabeledInput from '@/elements/common/inputs/Labeled';
import { Logo } from '@/icons';

import { ButtonWrapper, Container, InputWrapper, LogoWrapper } from './styled';

type AuthInfo = {
  id: string;
  password: string;
};

const defaultAuthInfo = {
  id: '',
  password: ''
};

const Login = (): ReactElement => {
  const [authInfo, setAuthInfo] = useState<AuthInfo>(defaultAuthInfo);

  const buttonDisabled = authInfo.id.length < 1 || authInfo.password.length < 1;

  return (
    <Container>
      <LogoWrapper>
        <Logo width={171} height={55} />
      </LogoWrapper>
      <InputWrapper>
        <LabeledInput
          label="전화번호, 사용자 이름 또는 이메일"
          type="email"
          value={authInfo.id}
          onChange={(e): void => {
            setAuthInfo(prev => {
              return { ...prev, id: e.target.value };
            });
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <LabeledInput
          label="비밀번호"
          type="password"
          value={authInfo.password}
          onChange={(e): void => {
            setAuthInfo(prev => {
              return { ...prev, password: e.target.value };
            });
          }}
        />
      </InputWrapper>
      <ButtonWrapper>
        <ButtonLarge type="submit" disabled={buttonDisabled}>
          로그인
        </ButtonLarge>
      </ButtonWrapper>
    </Container>
  );
};

export default Login;
