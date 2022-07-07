import React from 'react'
import MainLayout from '../layout/MainLayout'
import { Typography, Box } from '@mui/material'
import BackgroundImage from '../assets/img.png'
const LandingPage = props => {
    return (
        <MainLayout sx={{
            backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: "no",
            backgroundSize: 'cover',
        }} >
            <Box sx={{
                width: { lg: "60%" },
                paddingY: { xs: 15, lg: 8 },
                paddingX: { xs: 5 },
                height: "100%",
                marginTop: { lg: 14 },
                marginLeft: { lg: 10 },

            }}>
                <Typography color="white" fontWeight={700} sx={{ fontSize: { xs: 30, lg: 70 }, textAlign: { xs: 'center', lg: 'left' } }}>
                    ACME Wealth Management Platforms
                </Typography>
                <Typography color="white" sx={{ fontSize: { lg: 23 }, textAlign: { xs: 'center', lg: 'left' } }} fontWeight={300}>
                    Investment excellence
                </Typography>
                <Typography color="white" sx={{ fontSize: { lg: 23 }, textAlign: { xs: 'center', lg: 'left' } }} fontWeight={300}>
                    Diversify of thought
                </Typography>
                <Typography color="white" sx={{ fontSize: { lg: 23 }, textAlign: { xs: 'center', lg: 'left' } }} fontWeight={300}>
                    Organizational Strength
                </Typography>
            </Box>
        </MainLayout>
    )
}

LandingPage.propTypes = {}

export default LandingPage