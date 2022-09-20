import { Container, SubTitle, Title } from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export const Highlight: React.FC<HighlightProps> = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Container>
);
