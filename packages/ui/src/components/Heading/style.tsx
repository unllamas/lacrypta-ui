import { styled } from 'styled-components';

import { HeadingPrimitiveProps } from './types';

export const HeadingBox = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 2.1rem;

    @media (min-width: 800px) {
      font-size: 3.1rem;
      line-height: 3.2rem;
    }
  }

  h2 {
    font-size: 1.3rem;
    line-height: 1.4rem;

    @media (min-width: 800px) {
      font-size: 1.6rem;
      line-height: 1.7rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    line-height: 1.2rem;

    @media (min-width: 800px) {
      font-size: 1.3rem;
      line-height: 1.4rem;
    }
  }

  h4 {
    font-size: 1rem;
    line-height: 1.1rem;
  }

  h5 {
    font-size: 0.9rem;
    line-height: 1rem;
  }

  h6 {
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
`;

export const HeadingPrimitive = styled.div<HeadingPrimitiveProps>`
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$align};
`;
