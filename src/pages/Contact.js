import React, { useEffect } from 'react'
import { Card,Textarea, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, CardHeader, Heading, Button } from '@chakra-ui/react'
import SocialStack from './components/SocialStack'
import SmallNav from '../layouts/SmallNav'
import { Container, Stack } from '@chakra-ui/react'



export default function Contact() {

  const [email, setEmail] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleInputChange = (event) => {
    setEmail(event.target.value)
    setIsError(false)
  }

  useEffect(() => {
    if (isError) {
      setIsLoading(false)
    }
  }
  , [isError])

  const form = document.getElementById('contactform')
  console.log(form)

  useEffect(() => {
    if (form === null) {
      return
    }
    form.addEventListener('submit', () => {
      setIsLoading(true)
    })
  }
  , [form])


  return (
    <>

      <Container textAlign="center">
      <SmallNav page='contact'/>
        <Stack display="flex" justify="space-around">
          
        <Card maxW="2xl" my="10" p="5">
          <CardHeader>
            <Heading>
              Contact Us
            </Heading>
          </CardHeader>
          <div className="center-container">
          <SocialStack />
          </div>

          <form action="https://formspree.io/f/mwpejlnz" method="POST" id='contactform'>
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
            <Button isLoading={isLoading} id='submit' type="submit" colorScheme="pink" variant="solid" size="lg" mt="5" w="100%">Send</Button>
          </form>
        </Card>
        </Stack>
      </Container>
   

        
        
    
    </>
  )
}
