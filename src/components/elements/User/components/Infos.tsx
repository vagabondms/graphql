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

interface PostCountProps extends HTMLAttributes<HTMLDivElement> {}

const UserPostCount = (props: PostCountProps): ReactElement | null => {
  const { postCount } = useUserContext();

  if (typeof postCount !== 'number') {
    return null;
  }

  return <Statistics title="게시물 " value={postCount} {...props} />;
};

interface NickNameProps extends HTMLAttributes<HTMLSpanElement> {}

const UserNickname = (props: NickNameProps): ReactElement | null => {
  const { nickname } = useUserContext();
  if (typeof nickname !== 'string') {
    return null;
  }
  return <span {...props}>{nickname}</span>;
};

interface NameProps extends HTMLAttributes<HTMLSpanElement> {}

const UserName = (props: NameProps): ReactElement | null => {
  const { name } = useUserContext();
  if (typeof name !== 'string') {
    return null;
  }
  return <span {...props}>{name}</span>;
};

interface QuoteProps extends HTMLAttributes<HTMLSpanElement> {}

const UserQuotes = (props: QuoteProps): ReactElement | null => {
  const { quotes } = useUserContext();
  if (typeof quotes !== 'string') {
    return null;
  }
  return <span {...props}> {quotes}</span>;
};

export { UserPostCount, UserNickname, UserName, UserQuotes };
