import { Size } from 'types/styles';
import { DividerPrimitive } from './style';

interface DividerProps {
  y?: number | Size;
}

export function Divider(props: DividerProps): JSX.Element {
  const { y = 'none' } = props;

  let spacing;

  switch (y) {
    case 'none':
      spacing = 'inherit';
      break;
    case 'xs':
      spacing = '4px';
      break;
    case 'sm':
      spacing = '8px';
      break;
    case 'md':
      spacing = '16px';
      break;
    case 'lg':
      spacing = '32px';
      break;
    default:
      spacing = `${y}px`;
      break;
  }

  return <DividerPrimitive $y={spacing} />;
}
