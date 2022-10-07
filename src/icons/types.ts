import { HTMLAttributes } from 'react';

/**
 * 기본적인 Icon들의 Property 정의.
 * 추후 color나 크기를 인자로 받을 수 있게 변경이 필요
 */
interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  fill?: `#${string}`;
  height?: number;
  width?: number;
}

export type { IconProps };
