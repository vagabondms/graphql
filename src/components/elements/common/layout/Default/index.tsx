import Link from 'next/link';
import React, { HTMLAttributes, ReactElement } from 'react';

import { Footer, Header } from './styled';

interface DefaultProps extends HTMLAttributes<HTMLElement> {}

const Default = ({ children }: DefaultProps): ReactElement => {
  return (
    <div>
      <Header>
        <Link href="/">Home</Link>
        <Link href="/user/1">User</Link>
        This is Header
      </Header>
      {children}
      <Footer>This is Footer</Footer>
    </div>
  );
};
export default Default;