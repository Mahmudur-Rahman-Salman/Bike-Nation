import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import monstar from '../../image/Monster.png'
import slider from '../../image/slider-1.jpg'

const About = () => {
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 400
    }
    return (
        <Container sx={{ flexGrow: 1, p: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, textAlign: "center" }}>
                About Us
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={monstar} alt="" />
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            Our Vision
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3, fontSize: 15, fontWeight: 400, color: 'black' }}>
                            Bike Nation Financial Services strives to become a profitable financial <br /> solutions
                            provider built on a stable business foundation which is uniquely <br /> suited to respond to the financial requirements of Yamaha brand customers <br /> all over the world.
                        </Typography>
                        <Button variant="contained">Explore</Button>
                    </Box>
                </Grid>


            </Grid>
            <Grid container spacing={2}>

                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            Our Mission
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3, fontSize: 15, fontWeight: 400, color: 'black' }}>
                            Contribute to the value and excitement of owning Yamaha products by offering comprehensive and competitive financial services to our customers.
                        </Typography>
                        <Button variant="contained">Explore</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={slider} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default About;