import React, { Component } from 'react';
import './Home.css'


// Importing Components
import Header from '../Common/Header/Header';
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import Test from '../Test';

class Home extends Component {
    render() {
        return (
            <div>

                <Header />
                <UpcomingMovies />

            </div>
        )
    }
}

export default Home;