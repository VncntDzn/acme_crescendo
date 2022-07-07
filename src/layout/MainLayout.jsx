import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const MainLayout = ({ children, ...props }) => {
    return (
        <Box {...props}>{children}</Box>
    )
}

MainLayout.propTypes = {}

export default MainLayout