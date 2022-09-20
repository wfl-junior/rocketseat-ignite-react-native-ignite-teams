import { useTheme } from "styled-components/native";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { Container, Content, Icon } from "./styles";

export const NewGroup: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon size={56} color={colors.green[500]} />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar as pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
};
