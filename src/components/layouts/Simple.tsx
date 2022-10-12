import { ReactElement } from 'react';

import Background from './backgrounds/Main';
import ContentSection from './contents/Simple';
import { LayoutProps } from './types';

interface SimpleProps extends LayoutProps {}

const Simple = ({ children }: SimpleProps): ReactElement => {
  return (
    <Background>
      <ContentSection>{children}</ContentSection>
    </Background>
  );
};

export default Simple;
