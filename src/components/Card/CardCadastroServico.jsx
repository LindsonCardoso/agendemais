import { Heading, Highlight, Select, Switch, Stack, Text } from '@chakra-ui/react';
import React,{useEffect, useState } from "react";
import { Input } from "../ui/Input";

import { Button, Drawer } from 'rsuite';
import { set } from 'date-fns';

// components

export default function CardCadastroServico({ title, placement, open, titleBtnCancelar, titleBtnGravar }) {


  useEffect(() => {
    handleOpen()
  }, [])


  const handleOpen = key => {
    setActModal(true);
  };

  const [actModal, setActModal] = useState(false)





  return (
    <>

    </>
  )
}
