import { ReactNode } from "react";
import { Flex} from "@chakra-ui/react";

interface navBarContainerProps {
  children: ReactNode;
}

export const NavBarContainer = ({ children, ...rest }: navBarContainerProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      borderBottomLeftRadius={'3xl'}
      borderBottomRadius={'3xl'}
      p={5}
      bg={["primary.500", "primary.500", "COLOR.white", "COLOR.white"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...rest}
    >
      {children}
    </Flex>
  );
};
