import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo.png';
const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img style={{height:'35px'}} src={logo} alt="" />
                    <Typography style={{textAlign:'left'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Digital Learning
                    </Typography>
                    <NavLink
                    style={{marginRight:'15px', textDecoration:'none', color:'white', fontSize:'20px'}}
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                       Home
                    </NavLink>
                    <NavLink
                     style={{marginRight:'15px', textDecoration:'none', color:'white', fontSize:'20px'}}
                        to="/"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink
                     style={{marginRight:'15px', textDecoration:'none', color:'white', fontSize:'20px'}}
                        to="/popular-courses"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Popular Courses
                    </NavLink>
                    <NavLink
                     style={{marginRight:'15px', textDecoration:'none', color:'white', fontSize:'20px'}}
                        to="/faq"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        All Course
                    </NavLink>
                    <NavLink
                     style={{marginRight:'15px', textDecoration:'none', color:'white', fontSize:'20px'}}
                        to="/faq"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Contact Us
                    </NavLink>
                    <Button color="inherit">Login/Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;