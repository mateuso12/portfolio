import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';


function ContactForm() {
  return (
    <Container data-aos='fade'>
      <SectionTitle 
      title={
        <>
          Necessita de <br/>meus serviços?
        </>
      } 
      description={
        <>
        Preencha o formulário abaixo <br/> 
        que irei retornar em breve
        </>
      }
      />

      <Form />
    </Container>
  );
};

export default ContactForm;
