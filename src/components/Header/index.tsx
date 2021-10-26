

import NavLink from './NavLink';
import { Container } from './styles';


function Header() {
  return (
    <Container>
      <ul>
        <NavLink title='Início' path='/'/>
        <NavLink title='Projetos' path='/projects'/>
      </ul>
    </Container>
  );
};

export default Header;