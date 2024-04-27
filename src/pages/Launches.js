import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'

import { Box,Container,Heading,Divider } from '@chakra-ui/react'
import LaunchCard from './components/LaunchCard'
import { launches } from '../data/launches'
import SocialStack from './components/SocialStack'

export default function Launches() {

    const upcomingLaunches = launches.filter(launch => launch.upcoming)
    const previousLaunches = launches.filter(launch => !launch.upcoming)

    console.log(upcomingLaunches)
  return (
    <>
        <NavBar />
            <Container>
                <Heading size="md" my="10" textAlign="center">Upcoming Launches</Heading>
                {upcomingLaunches.map((launch, index) => {
                    console.log(launch)
                    return <LaunchCard key={index} launchDate={launch.launchDate} launchSite={launch.launchSite} altitude={launch.altitude} link={launch.link} />
                })}
                {(!upcomingLaunches.length) && <><Box my="5" textAlign="center">No launches planned soon. Follow our social media to stay updated!</Box><div className="center-container"><SocialStack /></div></>}
                <Divider/>
                <Heading size="md" my="10" textAlign="center" >Previous Launches</Heading>
                {previousLaunches.map((launch, index) => {
                    return <LaunchCard key={index} launchDate={launch.launchDate} launchSite={launch.launchSite} altitude={launch.altitude} link={launch.link} />
                })}
                
            </Container>
        <Footer />
    </>
  )
}
//<Button variant='solid' colorScheme='pink'>
//Read Report

