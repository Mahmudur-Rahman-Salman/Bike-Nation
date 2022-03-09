import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Container, useTheme } from '@mui/material';
import './Navigation.css'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth()

    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "#fff",
            textDecoration: "none"
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: "right"
            }
        },
        mobileNav: {
            textDecoration: "none",
            color: "#000"
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo, mobileNav } = useStyle();

    const [state, setState] = React.useState(false);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: "#212121", color: "#fff" }}>
                    <Container>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={navLogo}>
                                <span className='logo'>Bike Nation</span>
                            </Typography>

                            <Box className={navItemContainer}>
                                <Link className={navItem} to="/"><Button color="inherit">Home</Button></Link>
                                <Link className={navItem} to="/about"><Button color="inherit">About</Button></Link>
                                <Link className={navItem} to="/service"><Button color="inherit">Service</Button></Link>
                                {
                                    user?.email ?
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                        :
                                        <Link className={navItem} to="/login"><Button color="inherit">Login</Button></Link>
                                }

                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>

            </Box>
            <div>
                <React.Fragment>

                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNav} to="/">Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNav} to="/about">About</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNav} to="/service">Service</Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Divider />
                        </Box>
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navigation;