
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { TextField } from '@mui/material';




const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();


    const initialInfo = { buyersName: user.displayName, email: user.email, phone: "" }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;

        setOrderInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        const orders = {
            ...orderInfo
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("successfully added the order")

                }
            })

        e.preventDefault();
    }




    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={service.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {service.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>

            <div className='add-service'>

                <form onSubmit={handleBookingSubmit} style={{ width: "50%", margin: "0 auto" }}>

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        name="buyersName"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user.email}
                        name="email"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Phone Number"
                        name="phone"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Your Address"
                        onBlur={handleOnBlur}
                        name="address"
                        size="small"
                    />

                    <Button type="submit" variant="contained">Order Now</Button>
                </form>
            </div>
        </div>

    );
};

export default Booking;