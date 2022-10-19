import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'

import CardSocialTraffic from '../../components/Card/CardSocialTraffic';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/siderBar';
import { MyCalendar } from '../../components/Calendar';
import { Flex, Heading, useMediaQuery } from '@chakra-ui/react';

interface Props { }

export default function Home(props: Props) {
  const [isMobile] = useMediaQuery('(max-width: 500px)')

  return (
    <>
      <Head>
        <title>Painel - Agendamentos</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64  bg-[#F8F8F8]">
        <div className="relative md:pt-0">
        </div>
        <Flex p={5} direction={'column'} flex={1} alignItems="flex-start" justifyContent="flex-start">
          <Flex
            direction={isMobile ? 'column' : 'row'}
            w="100%"
            alignItems={isMobile ? 'center' : 'normal'}
            mb={5}
          >
            <Heading
              fontSize={isMobile ? '28px' : '3xl'}
              mt={4}
              mb={4}
              mr={4}
              color='primary'

            >
             Agendamentos
            </Heading>
          </Flex>
          <MyCalendar />
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
