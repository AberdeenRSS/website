import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'

import { Box,Card,Container,CardFooter,CardBody,Image,Stack,Heading,Text,ButtonGroup,Button,Divider, Stat, StatLabel, StatNumber, StatGroup, Link } from '@chakra-ui/react'

export default function Launches() {
  return (
    <>
        <NavBar />
            <Container h="100vh">

                <Heading size="md" my="10" textAlign="center">Upcoming Launches</Heading>

                <Card
                    
                    variant='outline'
                    >
                    <Stack mx="5" textAlign="center">
                        <Stat mx="auto" my="5">
                            <StatLabel>Launch Date</StatLabel>
                            <StatNumber>Oct 2023</StatNumber>
                        </Stat>
                        <Stat mx="auto" my="5">
                            <StatLabel>Launch Site</StatLabel>
                            <StatNumber>Alford, Scotland</StatNumber>
                        </Stat>
                    </Stack>

                    
                    </Card>






                <Divider/>
                <Heading size="md" my="10" textAlign="center" >Previous Launches</Heading>

                <Card
                    
                    variant='outline'
                    >
                    <Stack mx="5" textAlign="center">
                        <Stat mx="auto" my="5">
                            <StatLabel>Launch Date</StatLabel>
                            <StatNumber>14 Oct 2023</StatNumber>
                        </Stat>
                        <Stat mx="auto" my="5">
                            <StatLabel>Launch Site</StatLabel>
                            <StatNumber>Alford, Scotland</StatNumber>
                        </Stat>
                        <Box direction="row" display="flex" justifyContent="center" alignItems="">
                            <Stat>
                                <StatLabel>Altitude</StatLabel>
                                <StatNumber>-0.5m</StatNumber>
                            </Stat>
                        </Box>
                        <Link my="5" color="pink" href="https://www.uoarocketry.org/projects/solid-rockets">Watch Video</Link>
                    </Stack>

                    
                    </Card>
            </Container>

        <Footer />
    </>
  )
}
//<Button variant='solid' colorScheme='pink'>
//Read Report

