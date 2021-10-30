import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title='01 Ano' description='de experiência'/>

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

export default Experiences;
