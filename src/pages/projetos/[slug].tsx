import { GetStaticPaths, GetStaticProps } from 'next'
import Button from '../../components/Button'
import Header from '../../components/Header'
import ProjectBanner from '../../components/ProjectBanner'
import { getPrismicClient } from '../../services/prismic'
import { ProjectContainer } from '../../styles/ProjectStyles'
import Prismic from '@prismicio/client'
import { useRouter } from 'next/router'
import LoadingScreen from '../../components/LoadingScreen'

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProject;
}


export default function Project({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />
  }
    return (
      <ProjectContainer>
        <Header />
        <ProjectBanner title={project.title} type={project.type} imgUrl={project.thumbnail} />

        <main>
          <p>{project.description}</p>

          <Button content='Ver projeto online' href={project.link}/>
        </main>
      </ProjectContainer>
    )
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();
    const projects = await prismic.query([
      Prismic.Predicates.at('document.type', 'projects')
    ])

    const paths = projects.results.map(project => ({
      params: {
        slug: project.uid
      }
    }))

    return {
      paths,
      fallback: true
    }
  }

  export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient();
    const { slug } = context.params;

    const response = await prismic.getByUID('projects', String(slug), {})

    const project = {
      slug: response.uid,
      title: response.data.title,
      type: response.data.type,
      description: response.data.description,
      link: response.data.link.url,
      thumbnail: response.data.thumbnail.url,
    }

    return {
      props: {
        project
      },
      revalidate: 86400 // 24 Hours
    }
  }
