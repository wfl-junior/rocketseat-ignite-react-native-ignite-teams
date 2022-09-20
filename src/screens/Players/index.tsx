import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { IconButton } from "~/components/IconButton";
import { Container } from "./styles";

export const Players: React.FC = () => (
  <Container>
    <Header showBackButton />

    <Highlight
      title="Nome da turma"
      subtitle="Adicione a galera e separe os times"
    />

    <IconButton />
  </Container>
);
