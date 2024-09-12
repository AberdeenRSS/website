import React from 'react'
import { Box,Card,Stack,Stat,StatLabel,StatNumber,Link } from '@chakra-ui/react'

/* eslint-disable react/prop-types */
export default function LaunchCard({launchDate,launchSite,altitude,link}) {
  return (
    <Card variant='outline' my="4">
        <Stack mx="5" textAlign="center">
            <Stat mx="auto" my="5">
                <StatLabel>Launch Date</StatLabel>
                <StatNumber>{launchDate}</StatNumber>
            </Stat>
            <Stat mx="auto" my="5">
                <StatLabel>Launch Site</StatLabel>
                <StatNumber>{launchSite}</StatNumber>
            </Stat>
            <Box direction="row" display="flex" justifyContent="center">
                <Stat>
                    <StatLabel>Altitude</StatLabel>
                    <StatNumber>{altitude}</StatNumber>
                </Stat>
            </Box>
            {link ? <Link my="5" color="pink" href={link}>Watch Video</Link> : <Box my="5"></Box>}
           
        </Stack>
    </Card>
  )
}
