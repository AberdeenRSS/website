import { Button, Link } from '@chakra-ui/react'
import React from 'react'
/* eslint-disable react/prop-types */
export default function BigButton({text,url}) {
  return (
    <Link href={url}>
        <Button colorScheme="pink" marginY="13px" w="100%" variant="solid" size={{base:"md", md:"lg"}}>
            {text}
        </Button>
    </Link>
  )
}