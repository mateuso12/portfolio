import Header from "../../components/Header";
import ProjectPageItem from "../../components/ProjectPageItem";
import { ProjetosContainer } from "../../styles/ProjetosStyles";

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className='container'>
        <ProjectPageItem 
          title='Projeto 01'
          type='Website'
          imgUrl='https://i.imgur.com/eO9be.png'
          slug='teste'
        />
        <ProjectPageItem 
          title='Projeto 01'
          type='Website'
          imgUrl='https://i.imgur.com/eO9be.png'
          slug='teste'
        />
        <ProjectPageItem 
          title='Projeto 01'
          type='Website'
          imgUrl='https://i.imgur.com/eO9be.png'
          slug='teste'
        />
        <ProjectPageItem 
          title='Projeto 01'
          type='Website'
          imgUrl='https://i.imgur.com/eO9be.png'
          slug='teste'
        />
      </main>
      
    </ProjetosContainer>
  )
}