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
        description = 'Responsável por desenvolver estruturas de interface e funcionalidades para o usuário, utilizando de ultimas tecnologias disponíveis no mercado'
        />
        <ExperienceItem
        year = '2021'
        title = 'Desenvolvedor Front End'
        description = 'Desenvolvendo e aplicando soluções em aplicações front end em projetos freelance e de estudo, buscando sempre otimizar o desempenho e a performance da aplicação, procurando sempre manter um bom padrão de código'
        />
        <ExperienceItem
        year = '2022'
        title = 'Desenvolvedor Front End'
        description = 'Responsável por desenvolver novas funcionalidades e solucionar problemas de um produto para realização de grandes eventos on-line para empresas!'
        />
      </section>
    </Container>
  );
};

export default Experiences;
