import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import PopularCourses from '../PopularCourses/PopularCourses';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;