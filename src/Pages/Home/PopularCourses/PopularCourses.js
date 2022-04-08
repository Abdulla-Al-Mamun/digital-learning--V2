import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import photoshop from '../../../Images/Graphic/Adobe-Photoshop.png';
import premiere from '../../../Images/Video Editing/Adobe-Premiere-Pro.png';
import python from '../../../Images/Programming Languages/python.png';
import PopularCourse from '../PopularCourse/PopularCourse';
import { Typography } from '@mui/material';
const PopularCourses = () => {
    const popularCourses = [
        {
            img:photoshop,
            name:'Photoshop',
            text:'Create beautiful images, graphics, paintings on your desktop and iPad.'
        },
        {
            img:premiere,
            name:'Premiere',
            text:'Social media creators love Adobe Premiere Rush, Facebook and beyond..'
        },
        {
            img:python,
            name:'Python',
            text:'Python is a general-purpose, versatile and popular programming language.'
        },
    ]
    return (
        <Box sx={{ flexGrow: 1, m:5 }}>
        <Typography variant="h3" component="div">
          Popular Courses
        </Typography>
        <Grid style={{marginTop:'10px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
           {
            popularCourses.map(popularCourse => <PopularCourse key={popularCourse.name} popularCourse={popularCourse}></PopularCourse>)
           }
        </Grid>
      </Box>
    );
};

export default PopularCourses;