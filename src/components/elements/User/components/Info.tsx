import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import { useUserContext } from '../context';

const Wrapper = styled.div`
  margin-right: 40px;
  color: rgb(var(--ig-primary-text));
  font-size: var(--system-16-font-size);
  font-weight: var(--font-weight-system-regular);
`;

const Value = styled.span`
  color: rgb(var(--ig-primary-text));
  font-weight: 600;
`;

interface StatisticsProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
}

const Statistics = ({
  title,
  value,
  ...restProps
}: StatisticsProps): ReactElement => {
  return (
    <Wrapper {...restProps}>
      {title}
      <Value>{value}</Value>
    </Wrapper>
  );
};

const PostCount = (): ReactElement | null => {
  const { postCount } = useUserContext();

  if (typeof postCount !== 'number') {
    return null;
  }

  return <Statistics title="게시물" value={postCount} />;
};

export { PostCount };
