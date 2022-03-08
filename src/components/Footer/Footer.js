import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
    return (
        <Box style={{ backgroundColor: "#212121", color: "#fff" }} sx={{ textAlign: 'center' , p:4}}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <h3>Useful Links</h3>
                        <p>Home</p>
                        <p>Bikes</p>
                        <p>About us</p>
                        <p>Contact Us</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h3>Informaion</h3>
                        <p>Help Center</p>
                        <p>Terms and Condition</p>
                        <p>Privacy Policy</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h3>Social Network</h3>
                        <InstagramIcon fontSize="large"></InstagramIcon>
                        <FacebookIcon fontSize="large"></FacebookIcon>
                        <PinterestIcon fontSize="large"></PinterestIcon>
                        <TwitterIcon fontSize="large"></TwitterIcon>
                    </Grid>
                </Grid>
                <p>Copyright &copy; Developed By Salman</p>
            </Container>
        </Box>
    );
};

export default Footer;