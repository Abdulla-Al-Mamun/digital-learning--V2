import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import PopularCourses from '../PopularCourses/PopularCourses';
import AllCourse from '../AllCourse/AllCourse';
import ContactUs from '../ContactUs/ContactUs';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <PopularCourses></PopularCourses>
            <AllCourse></AllCourse>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;