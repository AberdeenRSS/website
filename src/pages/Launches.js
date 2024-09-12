import React from 'react'
import { Box, Container, Heading, Divider, Stack, Card } from '@chakra-ui/react'
import LaunchCard from './components/LaunchCard'
import { launches } from '../data/launches'
import SocialStack from './components/SocialStack'
import SmallNav from '../layouts/SmallNav'

export default function Launches() {

    const upcomingLaunches = launches.filter(launch => launch.upcoming)
    const previousLaunches = launches.filter(launch => !launch.upcoming)

    return (
        <Container textAlign="center">
            <SmallNav page='launches'/>
            <Stack 
               
                id='launchstack'
               
                display="flex" 
                justify="space-around"
            >
                <Card maxW="2xl" my="10" p="5">
                    <Heading size="md" textAlign="center">Upcoming Launches</Heading>
                    {upcomingLaunches.map((launch, index) => (
                        <LaunchCard 
                            key={index} 
                            launchDate={launch.launchDate} 
                            launchSite={launch.launchSite} 
                            altitude={launch.altitude} 
                            link={launch.link} 
                        />
                    ))}
                    {(!upcomingLaunches.length) && (
                        <>
                            <Box my="5" textAlign="center">
                                No launches planned soon. Follow our social media to stay updated!
                            </Box>
                            <div className="center-container">
                                <SocialStack />
                            </div>
                        </>
                    )}
                    <Divider/>
                    <Heading size="md" my="10" textAlign="center">Previous Launches</Heading>
                    {previousLaunches.map((launch, index) => (
                        <LaunchCard 
                            key={index} 
                            launchDate={launch.launchDate} 
                            launchSite={launch.launchSite} 
                            altitude={launch.altitude} 
                            link={launch.link} 
                        />
                    ))}
                </Card>
            </Stack>
        </Container>
    )
}