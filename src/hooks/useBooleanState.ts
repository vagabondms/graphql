import { useState } from 'react';

const useBooleanState = (
  initialSate: boolean = false
): readonly [boolean, (value?: unknown) => void] => {
  const [state, setState] = useState<boolean>(initialSate);
  const onToggle = (value: unknown): void => {
    return setState(prev => {
      return typeof value === 'boolean' ? value : !prev;
    });
  };

  return [state, onToggle];
};

export default useBooleanState;
