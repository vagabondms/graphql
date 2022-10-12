import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: calc(var(--base-unit) * 9);
  margin-bottom: calc(var(--base-unit) * 3);
`;

export const Container = styled.div`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 10px 0px;
  border: 1px solid rgb(var(--ig-elevated-separator));
  margin-top: 12px;
  background-color: rgb(var(--ig-primary-background));
  color: rgb(var(--ig-primary-text));
`;

export const InputWrapper = styled.div`
  margin: 0 40px 6px;
`;

export const ButtonWrapper = styled.div`
  margin: calc(var(--base-unit) * 2) calc(var(--base-unit) * 10)
    calc(var(--base-unit) * 2) calc(var(--base-unit) * 10);
`;
