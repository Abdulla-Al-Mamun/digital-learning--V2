import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
const ContactUs = () => {
    return (
        <Box sx={{p:3}} style={{height:'200px', backgroundColor:'purple'}}>
        <Typography variant="h3" component="div">
          Contact Us
        </Typography>
        <TextField
          className='textField'
          id="standard-password-input"
          label="name"
          type="text"
          variant="standard"
        />
        <br />
          <TextField
          id="standard-password-input"
          label="email"
          type="email"
          variant="standard"
        />
        <br />
       <Button sx={{m:2}} type='submit' variant="contained">Submit</Button>
       <Button sx={{m:2}} type='reset' variant="contained">Reset</Button>
        </Box>
    );
};

export default ContactUs;