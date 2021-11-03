import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';



function Experiences() {
 
  return (
    <Container>
      <SectionTitle title='01 Ano' description='de experiência' />

      <section data-aos='fade'>
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = 'Colaborando com um projeto de código privado, criando desde o zero toda a aplicação'
        />
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = 'Desenvolvendo projetos próprios para colocar em prática os conhecimentos que eu adquiri até o momento'
        />
      </section>
    </Container>
  );
};

export default Experiences;
