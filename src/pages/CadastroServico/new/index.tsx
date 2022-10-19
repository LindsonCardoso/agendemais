import { Flex, Heading, Stack, Switch, Text, Button, useMediaQuery, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/siderBar';
import { canSSRAuth } from '../../../utils/canSSRAuth';
import { FiChevronLeft } from 'react-icons/fi'

import CardCadastroServico from '../../../components/Card/CardCadastroServico';


export default function NewService() {

  const [isMobile] = useMediaQuery('(max-width: 500px)')

  return (
    <>
      <Head>
        <title>Painel - adicionar serviço</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64 bg-[#F8F8F8] ">
      <div className="relative md:pt-0 "></div>
      <Flex p={5} direction="column" flex={1} alignItems="flex-start" justifyContent="flex-start">
          <Flex
            direction="row"
            w="100%"
            align={isMobile ? "flex-start" : "center"}
            mb={isMobile ? 4 : 0}
            mt={4}
          >
            <Link href={'/CadastroServico'}>
              <Button
                p={4}
                display="flex"
                alignItems="center"
                justifyItems="center"
                mr={3}
                bg="white"

              >
                <FiChevronLeft color='#000' size={24} />
                Voltar
              </Button>
            </Link>
            <Heading
              color="primary"
              mt={isMobile ? 0 : 3}
              mb={4}
              mr={4}
              fontSize={isMobile ? "26px" : "3xl"}
            >
              Tipos de serviços
            </Heading>
          </Flex>

          <Flex w="100%" mb={2} >
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                 <h6 className="text-blueGray-700 text-xl font-bold">Adicione um novo tipo de serviço</h6>
                </div>
                <Stack  display="flex">
                  <Box>
                    <CardCadastroServico />
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
