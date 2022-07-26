import { ContainerItem } from "./styles";

interface ExperienceItemProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceItem({ year, title, description }: ExperienceItemProps) {
  return(
    <ContainerItem>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ContainerItem>
  )
}