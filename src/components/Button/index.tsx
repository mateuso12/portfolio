import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps {
  content: string;
  href: string;
}

function Button({ content, href }: ButtonProps) {
  return (
    <Container>
      <button type='button'>
        <a href={href} target='_blank'>{content}</a>
      </button>
    </Container>
  );
};

export default Button;
