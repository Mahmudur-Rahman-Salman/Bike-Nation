import React from 'react';
import Grid from '@mui/material/Grid';
import helmet1 from '../../image/helmet-1.png'
import helmet2 from '../../image/helmet-2.png'
import helmet3 from '../../image/white_helmet-2.png'
import { Container, Typography } from '@mui/material';

const Accessories = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, textAlign: "center", margin:"10px" }}>
                Accessories
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img src={helmet3} alt="helmet" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={helmet1} alt="helmet" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={helmet2} alt="helmet" style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Accessories;