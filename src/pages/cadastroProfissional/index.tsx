import { Box, Switch, Text, Button, Flex, Heading, Stack, Radio, useMediaQuery, useRadio, RadioGroup, Input, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import CardSettings from '../../components/Card/CardCadastroProfissional';
import CardProfile from '../../components/Card/CardProfile';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/siderBar';
import React, { useState } from 'react'
// import { Container } from './styles';
import CadAutonomo from '../../components/Card/cardCadastroAutonomo';
import { canSSRAuth } from '../../utils/canSSRAuth';

export default function CadastroProfissional() {

  const [isMobile] = useMediaQuery('(max-width: 500px)')
  const [mostrar, setMostrar] = useState(false);

  const onClickEstabelecimento = () => setMostrar(true);
  const onClickAutonomo = () => setMostrar(false);


  const { getInputProps, getCheckboxProps } = useRadio()

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <>
      <Head>
        <title>Painel - Cadastro Profissional</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64 bg-[#F8F8F8]">
        <div className="relative md:pt-0"></div>
        <Flex p={5} direction={'column'} flex={1} alignItems="flex-start" justifyContent="flex-start">
          <Flex
            direction={isMobile ? 'column' : 'row'}
            w="100%"
            alignItems={isMobile ? 'center' : 'normal'}
            mb={0}
          >
            <Heading
              fontSize={isMobile ? '28px' : '3xl'}
              mt={4}
              mb={4}
              mr={4}
              color='primary'

            >
              Cadastro do profissional
            </Heading>
          </Flex>
          <Flex w="100%" mb={2} >
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-white border-3">
              <div className="rounded-t  mb-0 px-6 py-6">


                <Stack
                  spacing={6}
                  mt={4}
                  direction={['column', 'row']}
                  justifyItems={'center'}
                  alignItems={'center'}
                  display="flex"
                >
                  <Box>
                    <Stack spacing={4} direction='row'>
                    <CardSettings />

                    </Stack>
                  </Box>
                </Stack>
              </div>
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})
