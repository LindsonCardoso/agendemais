
import { FiLogOut } from 'react-icons/fi'

import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

import imgLogo from '../../../public/logoagendemais.png'
import Image from 'next/image';
import Logo from "../Logo";
import { NavBarContainer } from './NavBarContainer';
import { MenuToggle } from './menuToggle';
import { MenuLinks } from './menuLinks';

interface NavBarProps {
}

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo
        title='Agende+'
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
