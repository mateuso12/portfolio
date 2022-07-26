import { Container } from './styles';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

function Footer() {

  function handleClick(url: string) {
    window.open(url)
  }

  function handleScroolToTop() {
    window.scroll({
      top:0,
      behavior: 'smooth'
    })
  }
  return ( 
    <Container>
      <div className='container'>
        <button type='button'onClick={() => handleScroolToTop()}>Voltar ao topo</button>
        <section>
          <AiOutlineGithub onClick={() => handleClick('https://github.com/mateuso12')}/>
          <AiFillLinkedin onClick={() => handleClick('https://linkedin.com/mateusousas')}/>
        </section>
      </div>
    </Container>
  );
};

export default Footer;
