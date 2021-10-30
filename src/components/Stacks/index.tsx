import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs, SiJest, SiTypescript } from 'react-icons/si'

import SectionTitle from '../SectionTitle';
import StacksItem from './StacksItem';
import { Container } from './styles';

function Stacks() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos'/>
      <section>
        <StacksItem title='HTML' icon={<AiFillHtml5 />} />
        <StacksItem title='CSS' icon={<FaCss3Alt />} />
        <StacksItem title='Javascript' icon={<IoLogoJavascript />} />
        <StacksItem title='React.JS' icon={<FaReact />} />
        <StacksItem title='Next.JS' icon={<SiNextdotjs />} />
        <StacksItem title='Typescript' icon={<SiTypescript />} />
        <StacksItem title='Jest' icon={<SiJest />} />
      </section>
    </Container>
  );
};

export default Stacks;
