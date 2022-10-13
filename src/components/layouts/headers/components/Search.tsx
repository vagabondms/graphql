import { ChangeEventHandler, ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';

import { Search as SearchIcon } from '@/icons';

interface SearchProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const SearchBox = styled.div`
  position: relative;
  display: flex;
  min-width: 125px;
  max-width: 283px;
  height: 36px;
  flex-direction: column;
  align-items: center;
  background: rgb(var(--ig-highlight-background));
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: inherit;
`;

const StyledInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const InputInner = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  cursor: text;
  transform: translateY(-50%);
`;

const Search = ({ value, onChange }: SearchProps): ReactElement => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const isTextExist = value?.length > 0;

  const showInputInner = !isInputFocused && !isTextExist;

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <SearchBox>
      <StyledInner>
        <StyledInput
          ref={inputRef}
          aria-label="Search input"
          autoCapitalize="none"
          placeholder={isInputFocused ? '검색' : undefined}
          type="text"
          value={value}
          onBlur={(): void => {
            return setIsInputFocused(false);
          }}
          onFocus={(): void => {
            return setIsInputFocused(true);
          }}
          onChange={onChange}
        />
        {showInputInner && (
          <InputInner
            onClick={(): void => {
              return inputRef?.current?.focus();
            }}
          >
            <SearchIcon height={16} width={16} />
            <span>검색</span>
          </InputInner>
        )}
      </StyledInner>
    </SearchBox>
  );
};

export default Search;
