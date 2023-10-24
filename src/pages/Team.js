
import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import { Container, Heading, Text, Link, Card,Avatar, Box } from '@chakra-ui/react'

export default function Team() {
  return (
    <>
      <NavBar />
        <Container my="10">
          <Heading size="md" my="5" textAlign="center">Team</Heading>
    
          <Text>
            We are always looking for new members to join the team. If you are interested in joining the team, please contact us at <Link color="pink" href="mailto:rocketry@ausa.org.uk">rocketry@ausa.org.uk</Link>.
          </Text>

          <Card px="3" pb="5" my="10">
          <Heading size="md" my="5" textAlign="center">Committee</Heading>
          
            <Heading size="md" my="5" textAlign="center">President</Heading>
            <Box display="flex" justifyContent="center">
              <Text>Sidney Pauly</Text>
            </Box>

            <Heading size="md" my="5" textAlign="center">Secretary</Heading>
            <Box display="flex" justifyContent="center">
              <Text>Alan Fleming</Text>
            </Box>

            <Heading size="md" my="5" textAlign="center">Treasurer</Heading>
            <Box display="flex" justifyContent="center">
              <Text>Thomas</Text>
            </Box>

            <Heading size="md" my="5" textAlign="center">Safety Officer</Heading>
            <Box display="flex" justifyContent="center">
              <Text>Ewan</Text>
            </Box>

            <Heading size="md" my="5" textAlign="center">Technical Officer</Heading>
            <Box display="flex" justifyContent="center">
              <Text>James McLean</Text>
            </Box>

            <Heading size="md" my="5" textAlign="center">Social Secretary</Heading>
            <Box display="flex" justifyContent="center">
              <Text>Trinh</Text>
            </Box>




            
          </Card>



          </Container>


      <Footer />
    </>
  )
}
