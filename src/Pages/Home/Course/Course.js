import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Course = (props) => {
    const {img, name, price} = props.course;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <CardMedia
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        component="img"
                        image={img}
                        alt="Paella dish"
                    />
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price:{price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Enroll Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Course;