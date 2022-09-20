import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export type IconButtonType = "primary" | "secondary";

interface IconButtonProps extends TouchableOpacityProps {
  type?: IconButtonType;
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
}

export const IconButton: React.FC<IconButtonProps> = ({
  type = "primary",
  icon,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Container {...props} type={type}>
      <MaterialIcons
        name={icon}
        size={24}
        color={type === "primary" ? colors.green[700] : colors.red.light}
      />
    </Container>
  );
};
