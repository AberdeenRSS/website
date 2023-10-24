import { Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import { useColorMode, Text,Box,Stack } from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa';

import {Link as ReactRouterLink} from 'react-router-dom'
import { Link as ChakraLink,LinkProps} from '@chakra-ui/react';


function HomePage() {

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <NavBar />
      <Container textAlign="center">
        <Stack h="100vh" pb="20" display="flex" justify="space-around">
          <Box>
            <Heading as="h1" mx="auto" size="3xl">UOA Rocketry</Heading>
            <Box mx="auto"><Text>Aberdeen, Scotland</Text></Box>
            <ButtonGroup variant="outline" spacing="2" mt="10">
              <ChakraLink as={ReactRouterLink} to="/contact"><Button colorScheme="pink" variant="solid" size={{base:"md", md:"lg"}}>Get Involved</Button></ChakraLink>
              
              <ChakraLink as={ReactRouterLink} to="/projects"><Button colorScheme="pink" variant="solid" size={{base:"md", md:"lg"}}>Our Projects</Button></ChakraLink>
            </ButtonGroup>

          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;

// <a  href="https://www.uoarocketry.com/team"><Button colorScheme="pink" variant="solid" size="lg">Our Team</Button></a>