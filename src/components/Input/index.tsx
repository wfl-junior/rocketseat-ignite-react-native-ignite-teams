import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

interface InputProps extends TextInputProps {}

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { colors } = useTheme();

  return (
    <Container ref={ref} placeholderTextColor={colors.gray[300]} {...props} />
  );
});
