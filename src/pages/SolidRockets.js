import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import Colander from '../assets/images/SolidRocketDot.png'

import { Box,Card,CardHeader,CardBody,Stack,Heading,Text,StackDivider,TableContainer,Table,TableCaption,Thead,Tbody,Tfoot,Tr,Th,Td,Stat,StatLabel,StatNumber,StatHelpText, Img, Link } from '@chakra-ui/react'

export default function SolidRockets() {
  return (
    <>
      <NavBar />
        <Box>
          <Card maxW="2xl" mx="auto" my="10"> 
            <CardHeader>
              <Heading size='md' textAlign="center">Solid Rocket Program</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Summary
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    The Solid Rocket Program is the first project of UOA Rocketry. The goal is to launch a solid rocket to 1km.
                    
                  </Text>
                </Box>

                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Colander
                  </Heading>
                  <Img src={Colander} alt='Colander' />
                  <Box display="flex">
                  <Stat>
                    <StatLabel>Highest Launch</StatLabel>
                    <StatNumber>-0.5m</StatNumber>
                    <StatHelpText>14 Oct 2023</StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Thrust</StatLabel>
                    <StatNumber>40N</StatNumber>
                  </Stat>
                </Box>
                <br />
                  <Text>
                    Colander is an experimental solid rocket. It is the first rocket of UOA Rocketry and will be used to gather data on the flight using our <Link color="pink" href='https://www.uoarocketry.org/projects/flight-computer'>Flight Computer</Link>.
                  </Text>
                  <br />
                  <Text>
                    Colander is a single stage rocket, the majority of the structural mass 3D printed using PLA and Foaming PLA.
                  </Text>

                  <br />
                  <Text>
                    The payload bay holds the flight computer and a parachute, deployed using a servo to open the payload bay door.
                  </Text>
                </Box>


                <Box>
                  
                  <TableContainer>
                    <Table variant='simple'>
                      <TableCaption placement="top">Launches</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Date/Time (UTC)</Th>
                          <Th>Rocket</Th>
                          <Th isNumeric>Height (m)</Th>
                          <Th isNumeric>Distance (m)</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>14/10/2023 15:26:24</Td>
                          <Td>Colander</Td>
                          <Td isNumeric>-0.5</Td>
                          <Td isNumeric>0</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
                
              </Stack>
            </CardBody>
        </Card>
        </Box>
      <Footer />
    </>
  )
}
