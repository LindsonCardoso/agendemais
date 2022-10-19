import { Flex, Heading, Stack, Switch, Text, useMediaQuery } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from '../../components/siderBar';
import { canSSRAuth } from '../../utils/canSSRAuth';
import { IoMdPricetag, IoIosCheckmarkCircle, IoIosCloseCircle,IoIosTime, IoIosWallet } from 'react-icons/io'
import { Drawer, IconButton, Placeholder, Button, Form } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import CardCadastroServico from '../../components/Card/CardCadastroServico';
import { Input, TextArea } from '../../components/ui/Input';

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

export default function CadastroServico() {

  const [isMobile] = useMediaQuery('(max-width: 500px)')
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = React.useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };


  async function GravarNovoServiço(){

    setOpen(false)

  }

  return (
    <>
      <Head>
        <title>Painel - Lista de Serviços</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64">
        <div className="relative md:pt-0"></div>
        <Flex p={5} direction={'column'} flex={1} alignItems={'flex-start'} justifyContent="flex-start">
          <Flex
            direction={isMobile ? 'column' : 'row'}
            w="100%"
            alignItems={isMobile ? 'flex-start' : 'row'}
            justifyContent='flex-start'
            mt={4}
            mb={4}
          >
            <Heading
              fontSize={isMobile ? '28px' : '3xl'}
              mr={4}
              color='primary'
            >
              Lista de serviços
            </Heading>

            <IconButton
              icon={<PlusIcon />}
              onClick={() => handleOpen('bottom')}>
              Adicionar serviço
            </IconButton>

            <Stack mb={2} ml='auto' align={isMobile ? 'flex-start' : 'center'} direction='row'>
              <Text fontWeight="bold">ATIVOS</Text>
              <Switch
                colorScheme={'green'}
                size='lg'
              />
            </Stack>
          </Flex>


          <Drawer  size='md' open={open} placement={placement} onClose={() => setOpen(false)} >
            <Drawer.Header>
              <Drawer.Title>Criar serviço</Drawer.Title>
              <Drawer.Actions className=''>
                <Button onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={GravarNovoServiço} appearance="primary">
                  Gravar
                </Button>
              </Drawer.Actions>
            </Drawer.Header>
            <Drawer.Body>
              <div className="flex-auto lg:px-10 pt-0">
                <form>
                  <div className="flex flex-wrap mt-5 ">
                    <div className="w-full lg:w-12/12 ">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-sm font-bold mb-2">
                          Nome do serviço*
                        </label>
                        <Input
                          type="text"
                          className="w-full bg-blueGray-100
                        px-4 py-2 rounded-lg mt-2
                        pl-8 border-b-2 font-display
                        focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 ">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-sm font-bold mb-2"

                        >
                          Tempo de execução
                        </label>
                        <Input
                          type="text"
                          className=" w-full bg-blueGray-100
                        px-4 py-2 rounded-lg mt-2
                        pl-8 border-b-2 font-display
                        focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-sm font-bold mb-2"

                        >
                          Valor deste serviço*
                        </label>
                        <Input
                          type="text"
                          className=" w-full bg-blueGray-100
                        px-4 py-2 rounded-lg mt-2
                        pl-8 border-b-2 font-display
                        focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"


                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-sm font-bold mb-2"

                        >
                          Descrição
                        </label>
                        <TextArea

                          className=" w-full bg-blueGray-100
                        px-4 py-2 rounded-lg mt-2
                        pl-8 border-b-2 font-display
                        focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"


                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 mt-3">
                      <div className="relative w-full mb-3">
                        <Stack mb={6} align="center" direction="row">
                          <label
                            className="block uppercase text-blueGray-600 text-sm font-bold"
                          >
                            Desativar este serviço:
                          </label>
                          <Switch
                            size="lg"
                            colorScheme="red"
                          />
                        </Stack>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Drawer.Body>
          </Drawer>

          <Link href={'#'}>
            <Flex
              cursor="pointer"
              w="100%"
              p={4}
              bg="#F0F0F5"
              direction={isMobile ? 'column' : 'row'}
              align={isMobile ? 'flex-start' : 'center'}
              rounded="4"
              mb={2}
              justifyContent="space-between"
            >
              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                <IoMdPricetag size={22} color={'#A94591'} />
                <Text fontWeight="bold" ml={4} noOfLines={2} fontSize="md" color="#000">
                  Cabelo
                </Text>
              </Flex>


              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                <IoIosWallet size={22} color={'#A94591'} />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#000">
                Valor: R$ 50.00
              </Text>
              </Flex>

              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                <IoIosTime size={22} color={'#A94591'} />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#000">
                Tempo de execução: 30mn
              </Text>
              </Flex>

              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="end" justifyContent="end">
                <IoIosCheckmarkCircle size={22} color="green" />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#000">Ativo</Text>
              </Flex>

            </Flex>
          </Link>

          <Link href={'#'}>
            <Flex
              cursor="pointer"
              w="100%"
              p={4}
              bg="#F0F0F5"
              direction={isMobile ? 'column' : 'row'}
              align={isMobile ? 'flex-start' : 'center'}
              rounded="4"
              mb={2}
              justifyContent="space-between"
            >
              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                <IoMdPricetag size={22} color={'#A94591'} />
                <Text fontWeight="bold" ml={4} noOfLines={2} fontSize="md" color="#000">
                  Unha
                </Text>
              </Flex>


              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                <IoIosWallet size={22} color={'#A94591'} />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#000">
                Valor: R$ 50.00
              </Text>
              </Flex>

              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                <IoIosTime size={22} color={'#A94591'} />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#000">
                Tempo de execução: 30mn
              </Text>
              </Flex>

              <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="end" justifyContent="end">
                <IoIosCloseCircle size={22} color="red" />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#000">Inativo</Text>
              </Flex>

            </Flex>
          </Link>
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
