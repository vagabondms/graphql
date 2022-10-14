import { InputHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import useBooleanState from '@/hooks/useBooleanState';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 36px;
  border: 1px solid rgb(var(--ig-stroke));
  border-radius: 3px;
  background: rgb(var(--ig-secondary-background));
  color: rgb(var(--ig-primary-text));
  font-size: var(--system-14-font-size);
`;

interface InputProps {
  $active: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 9px 0 7px 8px;
  border: none;
  appearance: none;
  background: transparent;

  ${({ $active }): any => {
    return (
      $active &&
      css`
        padding: 14px 0 2px 8px;
        font-size: var(--system-12-font-size);
      `
    );
  }}
`;

type LabelProps = {
  $minimize: boolean;
};

const Label = styled.label<LabelProps>`
  position: absolute;
  left: 8px;
  overflow: hidden;
  width: 100%;
  height: 36px;
  margin: 0;
  color: rgb(var(--ig-secondary-text));
  font-size: var(--system-12-font-size);
  line-height: 34px;
  pointer-events: none;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out 0.1s;

  ${({ $minimize }): any => {
    return (
      $minimize &&
      css`
        transform: scale(calc(10 / 12)) translateY(-10px);
      `
    );
  }}
`;

const Button = styled.button`
  padding: 5px 10px;
  font-weight: var(--font-weight-system-bold);
  white-space: nowrap;
`;

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LabeledInput = (props: LabeledInputProps): ReactElement => {
  const { label, value, onChange, type, ...rest } = props;

  const [showPassword, toggleShowPassword] = useBooleanState();

  const newType = type === 'password' && showPassword ? 'text' : type;
  // number 체크

  const isValueExists = !!value;

  return (
    <Container>
      {label && <Label $minimize={isValueExists}>{label}</Label>}
      <Input
        $active={isValueExists}
        value={value}
        type={newType}
        onChange={onChange}
        {...rest}
      />

      {type === 'password' && isValueExists && (
        <Button type="button" onClick={toggleShowPassword}>
          {showPassword ? '숨기기' : '비밀번호 표시'}
        </Button>
      )}
    </Container>
  );
};

export default LabeledInput;
