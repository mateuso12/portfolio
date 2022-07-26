import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';
import Button from '../Button';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProject[];
}

function Projects({projects}: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title='Últimos projetos'/>

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem 
          key={project.slug}
          img={project.thumbnail}
          title={project.title}
          type={project.type}
          slug={project.slug}
          />
        ))}
      </section>

      <Button content='Ver todos os projetos' href='/projetos'/>
    </Container>
  );
};

export default Projects;
