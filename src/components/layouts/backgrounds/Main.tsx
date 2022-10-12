import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgb(var(--ig-secondary-background));
`;

const Default = ({ children }: { children: ReactNode }): ReactElement => {
  return <Background>{children}</Background>;
};

export default Default;
