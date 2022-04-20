import React from 'react';
import photoshop from '../../../Images/Graphic/Adobe-Photoshop.png';
import illustrator from '../../../Images/Graphic/Adobe-Illustrator.png';
import inDesign from '../../../Images/Graphic/Adobe-InDesign.png';
import premierePro from '../../../Images/Video Editing/Adobe-Premiere-Pro.png';
import afterEffects from '../../../Images/Video Editing/Adobe-After-Effects.png';
import audition from '../../../Images/Video Editing/Adobe-Audition.png';
import python from '../../../Images/Programming Languages/python.png';
import javascript from '../../../Images/Programming Languages/Javascript-03.png';
import java from '../../../Images/Programming Languages/java.png';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Course from '../Course/Course';
const allCourse = () => {
    const allCourse = [
        {img:photoshop, name:'Photoshop', price:'1K'},
        {img:illustrator, name:'Illustrator', price:'1.5K'},
        {img:inDesign, name:'InDesign', price:'2K'},
        {img:photoshop, name:'Photoshop', price:'1K'},

        {img:premierePro, name:'PremierePro', price:'2.5K'},
        {img:afterEffects, name:'AfterEffects', price:'3K'},
        {img:audition, name:'Audition', price:'1.5K'},
        {img:premierePro, name:'PremierePro', price:'2.5K'},

        {img:python, name:'Python', price:'2.5K'},
        {img:javascript, name:'Javascript', price:'3K'},
        {img:java, name:'Java', price:'1.5K'},
        {img:python, name:'Python', price:'2.5K'},
    ]
    return (
        <Box sx={{ flexGrow: 1, m:5 }}>
        <Typography variant="h3" component="div">
          All Course
        </Typography>
        <Grid style={{marginTop:'10px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg:12 }}>
           {
            allCourse.map(course => <Course key={course.name} course={course}></Course>)
           }
        </Grid>
      </Box>
    );
};

export default allCourse;