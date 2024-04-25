import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'

import { Box,Card,Container,Stack,Heading,Divider, Stat, StatLabel, StatNumber, Link } from '@chakra-ui/react'

export default function Launches() {
  return (
    <>
        <NavBar />
            <Container h="100vh">

                <Heading size="md" my="10" textAlign="center">Upcoming Launches</Heading>

                






                <Divider/>
                <Heading size="md" my="10" textAlign="center" >Previous Launches</Heading>


                <Card
                    
                    variant='outline' my="4"
                    >
                    <Stack mx="5" textAlign="center">
                        <Stat mx="auto" my="5">
                            <StatLabel>Launch Date</StatLabel>
                            <StatNumber>4th Nov 2023</StatNumber>
                        </Stat>
                        <Stat mx="auto" my="5">
                            <StatLabel>Launch Site</StatLabel>
                            <StatNumber>Alford, Scotland</StatNumber>
                        </Stat>
                        <Box direction="row" display="flex" justifyContent="center">
                            <Stat>
                                <StatLabel>Altitude</StatLabel>
                                <StatNumber>~230m</StatNumber>
                            </Stat>
                        </Box>
                        <Link my="5" color="pink" href="https://www.youtube.com/shorts/AL8yvmGwcLw">Watch Video</Link>
                    </Stack>

                    
                    </Card>

                <Card variant='outline' my="4">
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
                        <Link my="5" color="pink" href="https://www.youtube.com/shorts/C2kzfUOwsMI">Watch Video</Link>
                    </Stack>

                    
                    </Card>
            </Container>

        <Footer />
    </>
  )
}
//<Button variant='solid' colorScheme='pink'>
//Read Report

