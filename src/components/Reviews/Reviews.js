import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://gentle-gorge-15121.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <Typography variant="h3" sx={{ fontWeight: 700, textAlign: "center", margin: "10px" }}>
                Get To Know From Our Clients
            </Typography>
            <div className="service-container">
                {
                    review.map(review => <Container>
                        <div className='service' style={{ padding: "20px", marginBottom:"100px", marginTop:"50px"}}>

                            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                {review.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {review.description}
                            </Typography>

                        </div>
                    </Container>
                    )
                }
            </div>

        </div>
    );
};

export default Reviews;