import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Stack } from '@chakra-ui/react'
import { SocialButton } from './SocialButton'

export default function SocialStack() {
  return (
    <Stack direction={'row'} spacing={6} mb="7">
        <SocialButton label={'Facebook'} href={'https://www.facebook.com/RocketryUoA/'}>
            <FaFacebookF />
        </SocialButton>
        <SocialButton label={'Instagram'} href={'https://www.instagram.com/uoarocketry/'}>
            <FaInstagram />
        </SocialButton>
        <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
        </SocialButton>
        <SocialButton label={'Github'} href={'https://github.com/AberdeenRSS'}>
            <FaGithub />
        </SocialButton>
        <SocialButton label={'AUSA'} href={'https://www.ausa.org.uk/organisation/31027/'}>
            <FaExternalLinkAlt />
        </SocialButton>
    </Stack>
  )
}
