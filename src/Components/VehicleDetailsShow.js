import { Box, Typography } from '@mui/material'
import React from 'react'

export default function VehicleDetailsShow({ data }) {
    return (
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
            <Typography>Flat Number: {data.flatNo}</Typography>
            <Typography>Name: {data.Name}</Typography>
            <Typography>Phone Number: {data.phoneNo}</Typography>
        </Box>
    )
}
