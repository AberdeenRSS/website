import React from 'react'
import NavBar from '../layouts/NavBar'
import { Heading,Box,Container, Divider,Center } from '@chakra-ui/react'
import BigButton from './components/BigButton'
import SocialStack from './components/SocialStack'

export default function Links() {
  return (
    <>
        <NavBar />
        <Box textAlign="center">
            <Heading marginTop="30px">UOA Rocketry and Space Sciences</Heading>
            <Center my="10px">
                    <SocialStack mx="auto"/>
            </Center>
            

            <Container maxWidth="500px">
                <BigButton text={"Most Recent Launch"} url={"https://www.youtube.com/shorts/C2kzfUOwsMI"} />
                <Divider color="pink"></Divider>
                <BigButton text={"Website"} url={"https://uoarocketry.org"} />
                
            </Container> 
        </Box>
    </>
  )
}
