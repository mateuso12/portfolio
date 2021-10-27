import { ReactNode } from 'react';
import ExperienceItem from '../Experiences/ExperienceItem';

import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}

      <section>
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae alias magni, consectetur neque repellendus hic quis laudantium animi atque? Voluptatum.'
        />
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae alias magni, consectetur neque repellendus hic quis laudantium animi atque? Voluptatum.'
        />
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae alias magni, consectetur neque repellendus hic quis laudantium animi atque? Voluptatum.'
        />
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae alias magni, consectetur neque repellendus hic quis laudantium animi atque? Voluptatum.'
        />
      </section>
    </Container>
  );
};

export default SectionTitle;
