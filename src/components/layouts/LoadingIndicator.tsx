import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';

import useBooleanState from '@/hooks/useBooleanState';

type IndicatorProps = {
  isLoading: boolean;
};

const LoadingBar = styled.div<IndicatorProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200%;
  background: linear-gradient(
    to right,
    rgba(52, 82, 255, 0.93) 0%,
    rgba(255, 16, 83, 0.92) 99%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: 0;
  transform: translateX(0);
  transition: transform 2s ease, opacity 1s ease;

  @keyframes Indeterminate {
    0% {
      transform: translateX(-100%);
    }
    20% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  ${({ isLoading }): any => {
    return (
      isLoading &&
      css`
        animation: Indeterminate 10s ease-out;
        animation-fill-mode: forwards;
        opacity: 1;
        transition: none;
      `
    );
  }}
`;

const Indicator = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 3px;
  flex-shrink: 0;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: 1px;
    content: ' ';
  }
`;

const LoadingIndicator = (): ReactElement | null => {
  const router = useRouter();
  const [isLoading, setLoading] = useBooleanState(false);

  const onRouterChangeStart = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const onRouterChangeComplete = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    router.events.on('routeChangeStart', onRouterChangeStart);
    router.events.on('routeChangeComplete', onRouterChangeComplete);

    return (): void => {
      router.events.off('routeChangeStart', onRouterChangeStart);
      router.events.off('routeChangeComplete', onRouterChangeComplete);
    };
  }, [router.events, onRouterChangeStart, onRouterChangeComplete]);

  return (
    <Indicator>
      <LoadingBar isLoading={isLoading} />
    </Indicator>
  );
};

export default LoadingIndicator;
