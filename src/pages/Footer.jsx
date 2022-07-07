import React from 'react'
import PropTypes from 'prop-types'
import MainLayout from '../layout/MainLayout'
import { Box, IconButton, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Footer = props => {
    const ICONS = [
        {
            name: 'Twitter',
            icon: <TwitterIcon />
        },
        {
            name: 'Facebook',
            icon: <FacebookIcon />
        },
        {
            name: 'LinkedIn',
            icon: <LinkedInIcon />
        },
        {
            name: 'Email',
            icon: <EmailIcon />
        },
    ]
    return (
        <MainLayout backgroundColor="gray" height={100} padding={10} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Typography>Call us at 111-222</Typography>
                <Typography>for more information</Typography>
            </Box>

            <Box display="flex" alignItems="center">
                <Typography>Social Share</Typography>

                {ICONS.map(({ name, icon }) => (
                    <IconButton key={name}>
                        {icon}
                    </IconButton>
                ))}
            </Box>
        </MainLayout>
    )
}

Footer.propTypes = {}

export default Footer