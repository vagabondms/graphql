import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding-top: var(--desktop-nav-height);
  background-color: rgb(var(--ig-secondary-background));
`;

const ContentSection = styled.div`
  width: calc(100% - 40px);
  max-width: 935px;
  padding: 30px 20px 0;
  margin: 0 auto 30px;
`;

const Default = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <Background>
      <ContentSection> {children}</ContentSection>
    </Background>
  );
};

export default Default;
