import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CustomCarousel from '../../common/CustomCarousel'
const EventsCarousel = ({ data }) => {
    return (

        <CustomCarousel>
            {data.map(({ month, day, title, desc, location }) => (
                <Box width="fit-content"  position="relative">
                    <Box position="absolute" backgroundColor="darkblue" top={0} zIndex={1} width={100}>
                        <Typography color="white" fontWeight={500} textAlign="center">
                            {month}
                        </Typography>
                        <Typography color="white" fontWeight={700} fontSize={30} textAlign="center">
                            {day}
                        </Typography>
                    </Box>
                    <Box   component={Card} backgroundColor="blue" paddingTop={5} width={400} height={200} display="flex" flexDirection="column" justifyContent="center" >
                        <CardContent>
                            <Typography color="white" sx={{ fontWeight: 500, fontSize: { lg: 25 } }}>{title}</Typography>
                            <Typography color="white">{desc}</Typography>
                            <Button variant="outlined" sx={{ color: "white", borderColor: "white", marginY: 3 }}>Get More Insight</Button>
                        </CardContent>
                    </Box>
                    <Box display="flex"  >
                        <Box width={0}
                            height={0}
                            borderTop={`40px solid blue`}
                            borderLeft={`30px solid transparent `}
                            borderRight={`30px solid transparent`}
                        />
                        <Typography sx={{alignSelf: 'flex-end' }} fontWeight={700} fontSize={20}>{location}</Typography>
                    </Box>
                </Box>
            ))}
        </CustomCarousel>
    )
}


export default EventsCarousel