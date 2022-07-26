import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
 button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: .5rem;
      border: none;
      margin-top: 2rem;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)}
      }

      a{ 
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
`;
