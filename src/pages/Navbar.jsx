import React from 'react';
import { AppBar, Box, Divider, Toolbar, Typography } from '@mui/material'
import Logo from '../assets/Logo.png'
import { useState } from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
const Navbar = props => {
    const [toggle, setToggle] = useState(false);

    const DATA = [
        {
            name: "Home",
            route: ""
        },
        {
            name: "About Us",
            route: ""
        },
        {
            name: "Insights",
            route: ""
        },
        {
            name: "Events",
            route: ""
        },
        {
            name: "Contact Us",
            route: ""
        },
    ]
    return (
        <>
            <AppBar sx={{ backgroundColor: "white" }}>
                <Box component={Toolbar} display="flex" sx={{ paddingY: 2, paddingX: { lg: 10 }, }}>
                    <Box display="flex" alignSelf="center" alignItems="center" flexGrow={1}>
                        <img src={Logo} alt="logo" />
                        <Box sx={{ display: { xs: 'none', lg: 'flex', flexDirection: 'column' } }}>
                            <Typography color="skyblue" textAlign="center">Research Professional</Typography>
                            <Typography color="blue" variant="h4" textAlign="center" fontWeight={600}>Platform</Typography>
                        </Box>
                    </Box>


                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        {DATA.map(({ name }) => (
                            <Box key={name} mt={3} padding={2} marginX={5}>
                                <Typography textAlign="center" color="black">{name}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box alignSelf="center" zIndex={1} sx={{
                        display: {
                            lg: 'none'
                        }
                    }}>
                        <Hamburger toggle={setToggle} toggled={toggle} direction="right" color={"red"} />
                    </Box>
                </Box>


                {toggle &&
                    <Box height={'100vh'} width={'100%'} backgroundColor="white" >
                        <Typography fontWeight={300} variant="h5" color="blue" textAlign="center" sx={{ padding: 2 }}>Site Links</Typography>
                        <Divider />


                        {DATA.map(({ name }) => (
                            <Box key={name} backgroundColor="gray" mt={3} padding={2} marginX={5}>
                                <Typography textAlign="center">{name}</Typography>
                            </Box>
                        ))}
                    </Box>}
            </AppBar>

        </>
    )
}

Navbar.propTypes = {}

export default Navbar