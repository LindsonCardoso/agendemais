import { Box, Button, Stack, CloseButton } from "@chakra-ui/react";

import { MenuItem } from "./menu-items";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
interface menuLinksProps {
  isOpen: Boolean;
}

export const MenuLinks = ({ isOpen }: menuLinksProps) => {

  const { signOut } = useContext(AuthContext);

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Cadastro </MenuItem>
        <MenuItem to="/how">Serviços </MenuItem>
        <MenuItem to="/faetures">Agenda</MenuItem>
        <MenuItem isLast>
          <CloseButton
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
            onClick={signOut}
          />
        </MenuItem>
      </Stack>
    </Box>
  );
};
