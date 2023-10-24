import {
  Box,
  chakra,
  Image,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { Link as ReactRouterLink} from 'react-router-dom'
import { Link as ChakraLink,LinkProps} from '@chakra-ui/react';
import SocialStack from '../pages/components/SocialStack';
import Logo from '../assets/images/RSSLogo.png'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box display="flex">
              <Image src={Logo} alt="UOA Rocketry Logo" w="100px"/>
              <Text alignSelf="center" ml="3">UOA Rocketry</Text>
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Projects</ListHeader>
            <ChakraLink as={ReactRouterLink} to="/projects/solid-rockets">
                Solid Rockets
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/projects">
              Hybrid Motor
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/projects">
              Flight Computer
            </ChakraLink>
          </Stack>
          
          <SocialStack />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

//<ChakraLink as={ReactRouterLink} to="/contact"></ChakraLink>