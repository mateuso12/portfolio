import { ReactNode } from "react";
import { ContainerStack } from "./styles";

interface StacksProps {
  title: string;
  icon: ReactNode;
}

export default function StacksItem({ title, icon }:StacksProps ) {
  return (
    <ContainerStack>
      <p>{title}</p>
      {icon}
    </ContainerStack>
  )
}