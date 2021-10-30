import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';
import Link from 'next/link';

function Projects() {
  return (
    <Container>
      <SectionTitle title='Últimos projetos'/>

      <section>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </section>

      <button type='button'>
        <Link href='/projects'>
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
};

export default Projects;
