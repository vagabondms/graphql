import React, { HTMLAttributes, ReactElement } from 'react';

import DefaultBackground from '@components/elements/common/layouts/backgrounds/Default';

import Header from './headers/Default';

interface DefaultProps extends HTMLAttributes<HTMLElement> {}

const Default = ({ children }: DefaultProps): ReactElement => {
  return (
    <>
      <Header />
      <DefaultBackground>{children}</DefaultBackground>
    </>
  );
};
export default Default;
