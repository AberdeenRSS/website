import { Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import { Text,Box,Stack } from '@chakra-ui/react';

import {Link as ReactRouterLink} from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react';
import Background from '../assets/images/Background2.png'
import SmallNav from '../layouts/SmallNav';
import { Card } from '@chakra-ui/react';
//   //  backgroundImage={Background} backgroundSize="cover" backgroundPosition=""       
function HomePage() {

  return (
    <>
      
      
      <Container textAlign="center">
      <SmallNav page='home'/>
        <Stack h="100vh" pb="20" pt='20' display="flex" justify="space-around">
        <Card maxW="2xl" my="10" p="5">
            
            <Heading as="h1" mx="auto" size="3xl">UOA Rocketry</Heading>
            <Box mx="auto"><Text>Aberdeen, Scotland</Text></Box>
            <hr style={{marginTop:'24px',marginBottom:'24px'}}/>
            <Text>If you have landed on this page you are probably interested in engineering, programming or space.</Text>
            <br></br>
            <Text>We have 2 weekly meetings to do work ranging from <ReactRouterLink to='https://github.com/AberdeenRSS/Engineering' style={{textDecoration:'underline'}}>CAD</ReactRouterLink>,  3D printing,  <ReactRouterLink to='https://github.com/AberdeenRSS' style={{textDecoration:'underline'}}>programming</ReactRouterLink>, electronics design, soldering etc.</Text>
            <br></br>
            <Text>There is lots to do and absolutely no experience required.</Text>
            <br></br>
            <Text>Please let us know if you are interested in joining through the button below or get in touch!</Text>
            <ButtonGroup variant="outline" spacing="2" mt="10">
              <ChakraLink as={ReactRouterLink} to="https://forms.gle/5vcLn69jJD1JZS4i8" mx='auto'><Button colorScheme="pink" variant="solid" size={{base:"md", md:"lg"}}>Get Involved</Button></ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/launches" mx='auto'><Button colorScheme="pink" variant="solid" size={{base:"md", md:"lg"}}>Our Launches</Button></ChakraLink>
  
              </ButtonGroup>

          </Card>
        </Stack>
      </Container>
    
    
    </>
  );
}

export default HomePage;

// <a  href="https://www.uoarocketry.com/team"><Button colorScheme="pink" variant="solid" size="lg">Our Team</Button></a>