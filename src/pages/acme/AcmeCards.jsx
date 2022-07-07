import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent, Typography } from '@mui/material'

const AcmeCards = ({ data }) => {
    return (
        <Box display="flex" justifyContent="space-around"  >
            {data.map(({ name, image, color }) => (
                <Card sx={{ width: 300, position: 'relative', borderBottom: `8px solid ${color}`, marginX: { md: 1 } }} key={name}>
                    <CardContent>
                        <Box sx={{
                            width: 0,
                            height: 0,
                            borderTop: ' 70px solid white',
                            borderRight: '70px solid transparent',
                            position: 'absolute'
                        }} />
                        <img src={image} alt="placeholder" width="100%"   />
                        <Box sx={{
                            width: 0,
                            height: 0,
                            borderBottom: '70px solid white',
                            borderLeft: '70px solid transparent',
                            position: 'absolute',
                            bottom: 55,
                            right: 0

                        }} />
                        <Typography color={color}>{name}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}

AcmeCards.propTypes = {}

export default AcmeCards