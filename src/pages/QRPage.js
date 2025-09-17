import { Button, ButtonGroup, Container, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { Text,Box,Stack } from '@chakra-ui/react';

import {Link as ReactRouterLink} from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react';
import SmallNav from '../layouts/SmallNav';
import { Card } from '@chakra-ui/react';
import SocialStack from './components/SocialStack';
//   //  backgroundImage={Background} backgroundSize="cover" backgroundPosition=""       
function QRPage() {

  return (
    <>
      
      
      <Container textAlign="center">
        <SmallNav />
        <Stack display="flex" justify="space-around">
        <Card maxW="2xl" my="10" p="5">
            
            <Heading as="h1" mx="auto" size="3xl">UOA Rocketry</Heading>
            <Box mx="auto"><Text>Aberdeen, Scotland</Text></Box>
            <Box mt='5' mb='0' className="center-container">
          <SocialStack />
          </Box>
            <hr style={{marginBottom:'24px'}}/>
            <Text>If you have landed on this page you are probably interested in engineering, programming or space.</Text>
            <br></br>
            <Text>We have 2 weekly meetings to do work ranging from <ReactRouterLink to='https://github.com/AberdeenRSS/Engineering' style={{textDecoration:'underline'}}>CAD</ReactRouterLink>,  3D printing,  <ReactRouterLink to='https://github.com/AberdeenRSS' style={{textDecoration:'underline'}}>programming</ReactRouterLink>, electronics design, soldering etc.</Text>
            <br></br>
            <Text>There is lots to do and absolutely no experience required.</Text>
            <br></br>
            <Text>Please let us know if you are interested in joining through the button below or get in touch!</Text>
          <br />
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <ChakraLink as={ReactRouterLink} to="https://forms.gle/5vcLn69jJD1JZS4i8" mx='auto'><Button colorScheme="pink" variant="solid" size={{base:"md", md:"lg"}}>Register Interest Form</Button></ChakraLink>
                <br />
              <ChakraLink as={ReactRouterLink} to="https://discord.gg/cjvDKkeBh8" mx='auto'><Button colorScheme="pink" variant="solid" size={{base:'md',md:'lg'}}>Join our Discord!</Button></ChakraLink>
            </div>

          
          </Card>
        </Stack>
      </Container>
    
    
    </>
  );
}

export default QRPage;

// <a  href="https://www.uoarocketry.com/team"><Button colorScheme="pink" variant="solid" size="lg">Our Team</Button></a>