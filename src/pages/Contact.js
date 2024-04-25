import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import { Card,Textarea, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, CardHeader, Heading, Button } from '@chakra-ui/react'
import SocialStack from './components/SocialStack'


export default function Contact() {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleInputChange = (event) => {
    setEmail(event.target.value)
    setIsError(false)
  }




  return (
    <>
      <NavBar />
      <Box h="100vh" pt="20">
        <Card maxW="2xl" mx="auto" my="10" p="5">
          <CardHeader>
            <Heading>
              Contact Us
            </Heading>
          </CardHeader>
          <SocialStack />

          <form action="https://formsubmit.co/rocketry@ausa.org.uk" method="POST">
            <FormControl isInvalid={isError} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='email' name="email" value={email} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Enter your contact email
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            
            <FormControl isInvalid={isError} isRequired mt="3">
              <FormLabel>Message</FormLabel>
              <Textarea type='text' name="message"/>
              {!isError ? (
                <FormHelperText>
                  Enter your message
                </FormHelperText>
              ) : (
                <FormErrorMessage>Message is required.</FormErrorMessage>
              )}
            </FormControl>
            <input type="hidden" name="_next" value="https://www.uoarocketry.org" />
            <Button type="submit" colorScheme="pink" variant="solid" size="lg" mt="5" w="100%">Send</Button>
          </form>
        </Card>
        
        </Box>
      <Footer />
    </>
  )
}
