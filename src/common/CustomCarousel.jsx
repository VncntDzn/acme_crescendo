import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Card, CardContent, Typography } from '@mui/material'

const CustomCarousel = ({ children }) => {
    return (

        <Box component={Carousel}  >
            {children}
        </Box>
    )
}


export default CustomCarousel