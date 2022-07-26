import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import myImg from '../../assets/IMG_9983-removebg-preview.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <LazyLoadImage src={myImg} alt="Foto de pessoa" delayTime={300}/>
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Mateus</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className='comment'>//Minha apresentação </span>
            <span className='purple'>Infos</span> &#123;
            <div className='name'>
              Nome: <span>Mateus,</span>
            </div>
            <div className='name'>
              Sobrenome: <span>de Sousa Silva Santos,</span>
            </div>
            &#125;
          </CodeItem>
          <CodeItem>
            <span className='purple'>Cargo desejado</span> &#123;
            <div className='name'>
               <span>Dev front-end,</span>
            </div>
            
            &#125;
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
