import React from 'react'
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material'
import PicOne from '../assets/picOne.png';
import PicTwo from '../assets/picTwo.png';
import PicThree from '../assets/picThree.png';
import AcmeCards from './acme/AcmeCards';
import CustomCarousel from './acme/AcmeCarousel';
const AcmeInsights = props => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const DATA = [
        {
            name: 'Global Factor Investing Study',
            color: "blue",
            image: PicOne
        },
        {
            name: '2019 Outlook',
            color: "green",
            image: PicTwo
        },
        {
            name: 'Capital Market Assumptions',
            color: "skyblue",
            image: PicThree
        },
    ]
    return (
        <Box paddingX={3}>
            <Box sx={{marginLeft: {lg: 10}, marginY: 2}}>
                <Typography variant="h3">ACME Insights</Typography>
                <Typography>How are factors being used around the world?</Typography>
            </Box>
            <Box paddingX={5}>
            <CustomCarousel data={DATA} />
            {/*     {!matches ? <CustomCarousel data={DATA} /> : <AcmeCards data={DATA} />} */}
            </Box>
        </Box>
    )
}

export default AcmeInsights