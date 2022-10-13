import { ReactElement } from 'react';

import Background from '@/layouts/backgrounds/Main';

import ContentSection from './contents/Main';
import Header from './headers/Main';
import { LayoutProps } from './types';

interface DefaultProps extends LayoutProps {}

const Default = ({ children }: DefaultProps): ReactElement => {
  return (
    <>
      <Header />
      <Background>
        <ContentSection>{children}</ContentSection>
      </Background>
    </>
  );
};
export default Default;
