import React, { HTMLAttributes } from 'react';

import { Footer, Header } from './styled';

interface DefaultProps extends HTMLAttributes<HTMLElement> {}

const Default = ({ children }: DefaultProps) => (
  <div>
    <Header>This is Header</Header>
    {children}
    <Footer>This is Footer</Footer>
  </div>
);

export default Default;
