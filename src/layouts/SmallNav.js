import { Tabs } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tab } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';


export default function SmallNav({page}) {
    
    const defaultIndex = page === 'home' ? 0 : page === 'launches' ? 1 : 2;

    return (
    <>
        <Box style={{paddingTop:'10px',paddingBottom:'10px'}}>
            <Box borderRadius='lg' bg='#2d3747'>
            <Tabs defaultIndex={defaultIndex} variant='line' colorScheme='pink' style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <Link to='/'><Tab>Home</Tab></Link>
                <Link to='/launches'><Tab>Launches</Tab></Link>
            </Tabs>
            
            </Box>
        </Box>
    </>
    )
}

SmallNav.propTypes = {
    page: PropTypes.oneOf(['home', 'launches', 'contact']).isRequired
};