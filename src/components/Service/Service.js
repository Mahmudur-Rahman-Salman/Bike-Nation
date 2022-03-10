import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, price, img } = service;
    return (
        <Container style={{ margin: "10px" }}>
            <div className='service' style={{ padding: "10px" }}>
                <img src={img} alt="" />
                <Typography variant="h4">{name}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Typography variant="subtitle1">Price: ${price}</Typography>
                <Link to={`/booking/${_id}`} style={{textDecoration:"none"}}><Button variant="contained" style={{ margin: "10px", padding: "10px" }}>Buy Now</Button></Link>

            </div>
        </Container >
    );
};

export default Service;