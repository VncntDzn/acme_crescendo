import React from 'react'
import PropTypes from 'prop-types'
import MainLayout from '../layout/MainLayout'
import { Box, Button, Typography } from '@mui/material'
import BackgroundImage from '../assets/fractal.png'
const Commitments = props => {
    return (
        <MainLayout backgroundColor="blue" sx={{
            backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: "no",
            backgroundSize: 'cover', height: '50vh', width: '100%',
            marginY: 5
        }}>
            <Box sx={{marginX: {lg: 25}}} display="flex" flexDirection="column" alignItems="center" justifyContent="center"  height="inherit">
                <Typography textAlign="center" sx={{ fontSize: { xs: 25, md: 35, lg: 50 }, color: 'white', fontWeight: 700 }}>Our Commitment to Professionals</Typography>
                <Typography textAlign="center" color="white" sx={{ fontSize: { lg: 25 } }}>
                    We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and experienced distribution. We are laser focused on our shared goal – helping clients achieve their objectives.
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button  variant="outlined" sx={{borderColor:"white", color: 'white', marginY: 1}}>Contact Us</Button>
                </Box>
            </Box>
        </MainLayout>
    )
}

Commitments.propTypes = {}

export default Commitments