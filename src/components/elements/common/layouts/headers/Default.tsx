import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import Search from '../../components/Search';

import { Compass, CreatePost, Heart, House, Logo, Message } from '@icons';

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  display: flex;
  width: 100%;
  height: var(--desktop-nav-height);
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgb(var(--ig-elevated-separator));
  background-color: rgb(var(--ig-primary-background));
`;

const HeaderInner = styled.div`
  z-index: 10;
  display: flex;
  width: 100%;
  max-width: calc(935px + 40px);
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  flex: 1 0 127px;
`;

const SearchContainer = styled.div`
  display: none;
  flex: 1 1 auto;

  @media screen and (min-width: 640px) {
    display: block;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex: 1 0 127px;
  justify-content: space-between;
  padding-left: 50px;
`;

const LogoButton = styled.button`
  margin-top: 7px;
`;

const Header = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoContainer>
          <Link href="/">
            <LogoButton type="button">
              <Logo />
            </LogoButton>
          </Link>
        </LogoContainer>
        <SearchContainer>
          <Search
            value={searchValue}
            onChange={(e): void => {
              setSearchValue(e.target.value);
            }}
          />
        </SearchContainer>
        <MenuContainer>
          <Link href="/">
            <button type="button">
              <House height={24} width={24} />
            </button>
          </Link>
          <Link href="/dire">
            <button type="button">
              <Message height={24} width={24} />
            </button>
          </Link>
          <button type="button">
            <CreatePost height={24} width={24} />
          </button>
          <Link href="/explorer">
            <button type="button">
              <Compass height={24} width={24} />
            </button>
          </Link>
          <button type="button">
            <Heart height={24} width={24} />
          </button>
          {/* 
        if 로그인,  
          프로파일 페이지 링크 보이기
        else 
          로그인 버튼
       */}
          <Link href="id">
            <button type="button">
              <div>user</div>
            </button>
          </Link>
        </MenuContainer>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
