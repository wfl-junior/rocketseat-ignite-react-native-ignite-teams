import { Container, Message } from "./styles";

interface ListEmptyProps {
  message: string;
}

export const ListEmpty: React.FC<ListEmptyProps> = ({ message }) => (
  <Container>
    <Message>{message}</Message>
  </Container>
);
