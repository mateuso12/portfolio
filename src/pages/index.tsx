import { HomeContainer } from '../styles/HomeStyles'

import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Stacks from '../components/Stacks';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client'
import { useEffect } from 'react';
import Head from 'next/head'

import AOS from 'aos'
import 'aos/dist/aos.css'
interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Início | Portfólio</title>
        <meta name="description" content="Este é um portfólio desenvolvido para mostrar alguns de meus projetos que estão no ar" />
        <meta property='og:description' content='Este é um portfólio desenvolvido para mostrar alguns de meus projetos que estão no ar'/>
      </Head>
      <Header />

      <main className='container'>
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Stacks />
        <ContactForm />
      </main>

      <Footer />

    </HomeContainer>
  );
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
