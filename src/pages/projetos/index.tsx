import { GetStaticProps } from "next";
import Header from "../../components/Header";
import ProjectPageItem from "../../components/ProjectPageItem";
import { getPrismicClient } from "../../services/prismic";
import { ProjetosContainer } from "../../styles/ProjetosStyles";
import Prismic from '@prismicio/client'
import Head from "next/head";

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectPageProps {
  projects: IProject[];
}

export default function Projetos({projects}: ProjectPageProps) {
  return (

    <ProjetosContainer>
      <Head>
        <title>Projetos | Portfólio</title>
      </Head>
      <Header />
      <main className='container'>
        {projects.map(project => (
          <ProjectPageItem 
          key={project.slug}
          title={project.title}
          type={project.type}
          imgUrl={project.thumbnail}
          slug={project.slug}
        />
        ))}
        
       </main>
      
    </ProjetosContainer>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400 // 24 Hours
  }
}
