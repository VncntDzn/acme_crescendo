import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Card, CardContent, Typography } from '@mui/material'
import CustomCarousel from '../../common/CustomCarousel'

const AcmeCarousel = ({ data }) => {
    return (

        <CustomCarousel>
            {data.map(({ name, image, color }) => (
                <Card sx={{ width: '100%', position: 'relative', borderBottom: `8px solid ${color}`, alignSelf: "center" }} key={name}>
                    <CardContent   >
                        <Box sx={{
                            width: 0,
                            height: 0,
                            borderTop: ' 100px solid white',
                            borderRight: '100px solid transparent',
                            position: 'absolute'
                        }} />
                        <img src={image} alt="placeholder" width="100%" />
                        <Box sx={{
                            width: 0,
                            height: 0,
                            borderBottom: '100px solid white',
                            borderLeft: '100px solid transparent',
                            position: 'absolute',
                            bottom: 55,
                            right: 0

                        }} />
                        <Typography color={color}>{name}</Typography>
                    </CardContent>
                </Card>
            ))}
        </CustomCarousel>
    )
}


export default AcmeCarousel