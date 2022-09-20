import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { Container } from "./styles";

export const Groups: React.FC = () => (
  <Container>
    <Header />

    <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
  </Container>
);
