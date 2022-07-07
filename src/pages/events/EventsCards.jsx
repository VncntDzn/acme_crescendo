import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, CardContent, Card, Button } from '@mui/material'

const EventsCards = ({ data }) => {
    return (
        <Box display="flex" justifyContent="space-around">
            {data.map(({ month, day, title, desc, location }) => (
                <Box width="fit-content" position="relative" >
                    <Box position="absolute" backgroundColor="darkblue" top={-30} zIndex={1} width={100}>
                        <Typography color="white" fontWeight={500} textAlign="center">
                            {month}
                        </Typography>
                        <Typography color="white" fontWeight={700} fontSize={30} textAlign="center">
                            {day}
                        </Typography>
                    </Box>
                    <Box component={Card} backgroundColor="blue" paddingTop={5} width={400} height={200} display="flex" flexDirection="column" justifyContent="center" >
                        <CardContent>
                            <Typography color="white" sx={{ fontWeight: 500, fontSize: { lg: 25 } }}>{title}</Typography>
                            <Typography color="white">{desc}</Typography>
                            <Button variant="outlined" sx={{ color: "white", borderColor: "white", marginY: 3 }}>Get More Insight</Button>
                        </CardContent>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box width={0}
                            height={0}
                            borderTop={`70px solid blue`}
                            borderLeft={`50px solid transparent `}
                            borderRight={`50px solid transparent`}
                        />
                        <Typography fontWeight={700} fontSize={20}>{location}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

EventsCards.propTypes = {}

export default EventsCards