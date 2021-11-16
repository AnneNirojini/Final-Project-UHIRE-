import React, { useState, useEffect } from 'react'
import axios from 'axios'

function VehiclesAPI() {
    const [vehicles, setVehicles] = useState([])

    const getVehicles = async () => {
        const res = await axios.get('/api/vehicles')
        setVehicles(res.data.vehicles)

    }

    useEffect(() => {
        getVehicles()
    }, [])


    return {
        vehicles: [vehicles, setVehicles]
    }
}

export default VehiclesAPI
