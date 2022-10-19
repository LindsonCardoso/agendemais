/* eslint-disable react/no-children-prop */
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Heading, Switch, Stack, Text, Box, Divider, Input, Flex, useMediaQuery, Button, InputGroup, InputLeftElement, InputRightElement, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from "react";
import { FiChevronDown, FiPlusCircle } from 'react-icons/fi'
import { Btn } from '../ui/Button';

// components

export default function CardHorario(props: any) {


  const [isMobile] = useMediaQuery('(max-width: 500px)')


  return (
    <>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <Stack
        justifyItems={'center'}
        alignItems={'center'}
        display="flex"
        >
          <Heading
          color={'gray.500'}
          fontSize={'md'}
          mt={3}
          mb={6}>
          Preencha com o horário do seu expediente
        </Heading>
        </Stack>

        <form>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} >
            <Box >
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Domingo</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>
              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>

            <Box>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Segunda-Feira</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>


              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>

            <Box>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Terça-Feira</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>


              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>

            <Box>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Quarta-Feria</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>


              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>

            <Box>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Quinta-Feira</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>


              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>

            <Box>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Sext-Feria</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>


              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>

            <Box>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <Text>Sabado</Text>
                    <Switch
                      size="md"
                      color="primary"
                    />
                  </Stack>
                </Box>


              </Stack>
              <Stack
                spacing={6}
                mt={4}
                direction={['column', 'row']}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
              >
                <Box>
                  <Stack spacing={'10'} direction='row'>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<ChevronDownIcon color='black' />}
                      />
                      <Input type='time' />
                    </InputGroup>
                  </Stack>
                </Box>
              </Stack>
              <Stack
                align={isMobile ? "flex-start" : "center"}
                mb={2}
                justifyItems={'center'}
                alignItems={'center'}
                display="flex"
                direction={isMobile ? 'column' : 'row'}
                mt={isMobile ? 3 : 3}
              >
                <Button
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyItems="center"

                  bg="white"
                >
                  <FiPlusCircle color='#000' size={16} />
                  Adicionar
                </Button>
              </Stack>
              <Divider />
            </Box>
          </SimpleGrid>

          <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <Btn
                      type='submit'
                      className="
                    w-full  bg-primarycolor
                    text-white rounded-lg px-4 py-3 mt-6
                    "
                  >

                    Salvar
                  </Btn>



                </div>

              </div>
        </form>
      </div>
    </>
  )
}
