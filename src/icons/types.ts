import { HTMLAttributes } from 'react';

/**
 * fill : icon 색
 * height, width: icon 크기
 */
interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  fill?: `#${string}`;
  height?: number;
  width?: number;
}

export type { IconProps };
