import Link from 'next/link'
import { Container } from './styles';
import Head from 'next/head'

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjectItem({ title, type, imgUrl, slug }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>

      <Link href={`/projetos/${slug}`}>
        <a>
          <div className='overlay'/>
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
};

export default ProjectItem;
