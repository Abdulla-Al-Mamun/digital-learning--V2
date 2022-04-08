import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../Images/header-bg.jpg';
import React from 'react';
const Header = () => {
    const headerBg = {
        background:`url(${bg})`,
        height:'400px',
        backgroundPosition:'center',
    }
    return (
        <Box style={headerBg}>
            <Container style={{color:'white', display:'flex', justifyContent:'center', alignItems:'center', height:'400px'}}>
            <Box>
            <Typography variant="h5" component="div">
                World Best Courses!<br />
                You Will Find Here!
            </Typography>
            <br />
            <Typography variant="body2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit dolores ratione eius <br /> corporis sit, quod maiores provident maxime assumenda dolorum nihil incidunt culpa dolor fuga <br /> dignissimos labore architecto earum inventore debitis sequi consequuntur fugiat excepturi aut! Laudantium ut suscipit
            </Typography>
            <br />
            <Button variant="contained">Get Started</Button>
            </Box>
        </Container>
        </Box>
    );
};

export default Header;