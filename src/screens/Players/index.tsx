import { Filter } from "~/components/Filter";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { IconButton } from "~/components/IconButton";
import { Input } from "~/components/Input";
import { Container, Form } from "./styles";

export const Players: React.FC = () => (
  <Container>
    <Header showBackButton />

    <Highlight
      title="Nome da turma"
      subtitle="Adicione a galera e separe os times"
    />

    <Form>
      <Input placeholder="Nome do participante" autoCorrect={false} />
      <IconButton icon="add" />
    </Form>

    <Filter title="Time A" isActive />
  </Container>
);
