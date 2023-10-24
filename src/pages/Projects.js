import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import SolidRocket from '../assets/images/SolidRocketDot.png'

import { Box,Card,CardFooter,CardBody,Image,Stack,Heading,ButtonGroup,Button,Divider, Link } from '@chakra-ui/react'

export default function Projects() {
  return (
    <>
        <NavBar />
            <Box>
              <Card maxW='sm' m="10" mx="auto">
                <CardBody>
                  <Image
                    src={SolidRocket}
                    alt='Rocket Launch'
                    borderRadius='lg'
                    mx='auto'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Solid Rockets</Heading>
                    
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <a href="https://uoarocketry.org/projects/solid-rockets">
                    <Button variant='solid' colorScheme='pink'>
                      Read More
                    </Button>
                    </a>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW='sm' m="10" mx="auto">
                <CardBody>
                  
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Hybrid Motor</Heading>
                    
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='pink'>
                      Coming Soon
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW='sm' m="10" mx="auto">
                <CardBody>
                  
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Flight Computer</Heading>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Link href="http://app.uoarocketry.org">
                      <Button variant='solid' colorScheme='pink'>
                        Data
                      </Button>
                    </Link>
                    <Link href="https://github.com/AberdeenRSS/FlightComputer">
                      <Button variant='ghost' colorScheme='pink'>
                        Documentation
                      </Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Box>
        <Footer />
    </>
  )
}
