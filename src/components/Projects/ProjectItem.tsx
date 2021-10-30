import { ProjectContainer } from "./styles";
import { AiOutlineRightCircle } from 'react-icons/ai'
import Link from 'next/link';


export default function ProjectItem() {
  return (
    <ProjectContainer>
      <section>
        <div className='overlay'/> 
        <div className='text'> 
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>
      <button type='button'>
        <Link href='/project'>
          <a>
          Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  )
}