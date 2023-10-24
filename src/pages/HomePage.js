import { Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import { useColorMode, Text,Box,Stack } from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa';


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
            <ButtonGroup variant="outline" spacing="6" mt="10">
              <Button colorScheme="pink" variant="solid" size="lg" href="https://www.uoarocketry.org/contact" target="_blank">Get Involved</Button>
              <Button colorScheme="pink" variant="solid" size="lg" href="https://www.uoarocketry.com/team" target="_blank">Our Team</Button>
              <Button colorScheme="pink" variant="solid" size="lg" href="https://www.uoarocketry.com/projects" target="_blank">Our Projects</Button>
            </ButtonGroup>

          </Box>
        </Stack>

        <Stack h="100vh" display="flex" justfy="space-around" hidden>
          <Box>
            <Heading as="h1" mx="auto" size="xl">About us</Heading>
            <Box mx="auto">
              <br></br>
              <Text>If you have landed on this page you are probably interested in engineering, programming or space.</Text>
              <br></br>
              <Text>Don't worry if you don't have any experience in this. We are happy for everyone to join and will help you get into the topic.</Text>
            </Box>
          </Box>
        </Stack>


      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
