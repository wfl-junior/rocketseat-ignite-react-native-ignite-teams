import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

interface InputProps extends TextInputProps {}

export const Input: React.FC<InputProps> = props => {
  const { colors } = useTheme();

  return <Container placeholderTextColor={colors.gray[300]} {...props} />;
};
