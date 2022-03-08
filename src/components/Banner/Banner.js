import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../image/banner.png'

const Banner = () => {
    // const banner = {
    //     background: `url(${banner})`,
    // }
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 400
    }
    return (
        <Container sx={{ flexGrow: 1 , p:4}}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{fontWeight:700}}>
                            Go Anywhere<br />
                            Starts Here
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3, fontSize: 15, fontWeight: 400, color:'black' }}>
                        With flexible financing options and comprehensive protection plans, <br /> offered directly through Bike Nation, the choice is simple. <br /> Go Anywhere, Start Here.
                        </Typography>
                        <Button variant="contained">Explore</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;