import { RequireOnlyOne } from '../utils/typeUtils';

interface BaseAvatarProps {
  src: string;
  alt: string;
  // Deprecated normal and large
  size: 'normal' | 'large' | 'xs' | 'sm' | 'md';
}

export type AvatarProps = RequireOnlyOne<BaseAvatarProps>;
export type AvatarComponent = React.ReactElement<AvatarProps>;
