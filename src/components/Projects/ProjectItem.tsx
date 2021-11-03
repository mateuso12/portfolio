import { AiOutlineRightCircle } from 'react-icons/ai'
import Link from 'next/link';
import { ProjectItemContainer } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  img: string
}

export default function ProjectItem({title, type, slug, img}: ProjectItemProps) {
  return (
    <ProjectItemContainer imgUrl={img} data-aos='fade-up'
    data-aos-anchor-placement='top-center' data-aos-easing='linear'>
      <section>
        <div className='overlay'/> 
        <div className='text'> 
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>
      <button type='button'>
        <Link href={`/projetos/${slug}`}>
          <a>
          Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectItemContainer>
  )
}