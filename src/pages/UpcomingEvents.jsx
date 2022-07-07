import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material'
import EventsCarousel from './events/EventsCarousel'
import EventsCards from './events/EventsCards'

const UpcomingEvents = props => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const DATA = [
        {
            month: "JAN.",
            day: "28",
            title: "Insight Exchange Network",
            desc: "Join us for this conference showcasing innovation",
            location: "Chicago, IL"
        },
        {
            month: "FEB.",
            day: "12",
            title: "Citywide Buyers Retreat",
            desc: "Find out how banks are responding to the changing future of interest...",
            location: "The Wagner, New York"
        },
        {
            month: "MAY",
            day: "6",
            title: "Research Exchange",
            desc: "Find the best online resources to help with your investments...",
            location: "London, England"
        },
    ]
    return (
        <Box paddingX={3}>
            <Box marginY={5}>
                <Typography sx={{ fontSize: {xs:25, lg: 40 }, fontWeight: 700 }}>Upcoming Events</Typography>
                <Typography>This needs a great tagline, but Ill fill it in later</Typography>
            </Box>
            <Box paddingX={5}>
                {!matches ? <EventsCarousel data={DATA} /> : <EventsCards data={DATA} />}
            </Box>

        </Box>
    )
}

UpcomingEvents.propTypes = {}

export default UpcomingEvents