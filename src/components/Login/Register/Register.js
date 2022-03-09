import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../../../image/register.jpg'

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom className='login'>Register</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Retype Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '100%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <Link to="/login" style={{ textDecoration: "none" }}><Button sx={{ width: '100%', m: 1 }} variant="outlined">Alreaddy Registered ? Please Login</Button></Link>

                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={register} alt="login" style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;