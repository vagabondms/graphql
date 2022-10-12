import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const useButton = (props: ButtonProps): ButtonProps => {
  const { loading, children, disabled, ...rest } = props;

  const btnDisabled = disabled || loading;

  return {
    disabled: btnDisabled,
    children: loading ? 'loading...' : children,
    ...rest
  };
};

export default useButton;
