import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 700, textAlign: "center", margin: "10px" }}>
                Services
            </Typography>

            <div className="service-container">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>

        </div>
    );
};

export default Services; <h2>Services</h2>