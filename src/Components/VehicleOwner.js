import React, { useState, useEffect } from 'react'
import VehicleData from '../Data/VehicleData'
import { Grid, Box, Typography, TextField } from '@mui/material'
import VehicleDetailsShow from './VehicleDetailsShow'

export default function VehicleOwner() {

    /*  
       0 -> Not Filled
       1 -> Record Found  
       2 -> Record Not Found   
   */
    const [inputType, setInputType] = useState(0)
    const [vehicleNo, setVehicleNo] = useState("0")
    const [vehicleDetails, setVehicleDetails] = useState(undefined)

    const handleVehicleNoInput = (event) => setVehicleNo(event.target.value)

    // returns 1st matching record
    const findRecord = () => {
        return VehicleData.find(each => each.carNo === vehicleNo || each.scooterNo === vehicleNo)
    }

    useEffect(() => {
        if (vehicleNo.length < 4) {
            setInputType(0)
        } else if (vehicleNo.length === 4) {
            const vehicleDetail = findRecord()
            if (typeof vehicleDetail === "undefined") {
                setInputType(2)
            } else {
                setInputType(1)
                setVehicleDetails(vehicleDetail)
            }
        } else {
            setInputType(2)
        }
    }, [vehicleNo])

    return (
        <Box sx={{ boxShadow: 3 }} style={{ borderRadius: "25px", padding: "20px" }}>
            <Grid container direction="row" spacing={2} justifyContent="space-evenly" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Typography style={{ textAlign: "center", marginBottom: "15px", fontSize: "16px" }}>Enter vehicle number(Last 4) to get owners details:</Typography>
                    <TextField id="outlined-basic" label="Enter Vehicle Number" variant="outlined" onChange={handleVehicleNoInput} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {inputType === 0 && <Typography>Enter 4 digits to get details</Typography>}
                    {inputType === 1 && (typeof vehicleDetails !== "undefined") && <VehicleDetailsShow data={vehicleDetails} />}
                    {inputType === 2 && <Typography>No record found</Typography>}
                </Grid>
            </Grid>
        </Box >
    )
}
