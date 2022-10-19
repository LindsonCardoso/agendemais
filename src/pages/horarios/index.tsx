import { Flex, Heading, Stack, Switch, Text, Button, useMediaQuery } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CardSettings from '../../components/Card/CardCadastroProfissional';
import CardProfile from '../../components/Card/CardProfile';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/siderBar';
import { canSSRAuth } from '../../utils/canSSRAuth';
import { IoMdPricetag } from 'react-icons/io'
import CardHorario from '../../components/Card/CardHorarios';


export default function Agenda() {

  const [isMobile] = useMediaQuery('(max-width: 500px)')

  return (
    <>
      <Head>
        <title>Painel | Ajuste de horarios</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64 bg-[#F8F8F8]">
        <div className="relative md:pt-0 "></div>

        <Flex p={5} direction={'column'} flex={1} alignItems={'flex-start'} justifyContent="flex-start">
          <Flex
            direction={isMobile ? 'column' : 'row'}
            w="100%"
            alignItems={isMobile ? 'flex-start' : 'row'}
            justifyContent='flex-start'
            mb={0}
          >
            <Heading
              fontSize={isMobile ? '28px' : '3xl'}
              mt={4}
              mb={4}
              mr={4}
              color='primary'
            >
              Controle de horários
            </Heading>
          </Flex>

          <Flex w="100%" mb={2} >
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-white border-3">
              <div className="rounded-t  mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">

                  </h6>
                </div>
                <CardHorario />
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
