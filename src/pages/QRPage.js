import { Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { Text,Box,Stack } from '@chakra-ui/react';

import {Link as ReactRouterLink} from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react';
import SmallNav from '../layouts/SmallNav';
import { Card } from '@chakra-ui/react';
import SocialStack from './components/SocialStack';
import {Image} from '@chakra-ui/react';
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
            <ButtonGroup variant="outline" spacing="2" mt="10">
              <ChakraLink as={ReactRouterLink} to="https://forms.gle/5vcLn69jJD1JZS4i8" mx='auto'><Button colorScheme="pink" variant="solid" size={{base:"md", md:"lg"}}>Register Interest Form</Button></ChakraLink>
            <ChakraLink as={ReactRouterLink} to="https://discord.gg/cjvDKkeBh8" mx='auto'><Button colorScheme="pink" variant="solid" size={{base:'md',md:'lg'}}>Join our Discord!</Button></ChakraLink>
            </ButtonGroup>
            <hr style={{ marginTop:"24px", marginBottom:"24px"}}/>
            <Image src="https://private-user-images.githubusercontent.com/114114685/473771265-846143ed-827d-40fe-a824-72865989a652.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgxMDkzODMsIm5iZiI6MTc1ODEwOTA4MywicGF0aCI6Ii8xMTQxMTQ2ODUvNDczNzcxMjY1LTg0NjE0M2VkLTgyN2QtNDBmZS1hODI0LTcyODY1OTg5YTY1Mi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxN1QxMTM4MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNzhmMDcwYmE3YmYwMGNhZTExOThiZjczY2NlMjA5YmE2MzM4NGEyMzRkMzk1NGQyMzBhZDdjNmE5NzVkOTc5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.psAYchXN_EWWg-g9WLWa7GUltlufrh7nHTynbdnsw_U" />

          </Card>
        </Stack>
      </Container>
    
    
    </>
  );
}

export default QRPage;

// <a  href="https://www.uoarocketry.com/team"><Button colorScheme="pink" variant="solid" size="lg">Our Team</Button></a>