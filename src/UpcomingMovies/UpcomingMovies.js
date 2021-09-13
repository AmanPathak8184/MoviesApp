import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import './UpcomingMovies.css'
import moviesData from '../Common/movieData';

// Image List Imports
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

// Icon Imports
import { IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const style = {
    upcomingMoviesHeader: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'darkgoldenrod',
        color: 'white',
        padding: '0.5%',
    },

    imageListDiv: {
        // border: "2px Solid red",
        padding: "1%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',



    },

    imageList: {
        flexWrap: 'noWrap',
        transform: 'translateZ(0)',
        height: 'auto'
    },

    title: {
        color: 'darkgoldenrod',
    },

    titleBar: {
        backgroundColor: 'black',
    }
}



class UpcomingMovies extends Component {

    render() {

        const { classes } = this.props;


        return (
            <div>
                <div className={classes.upcomingMoviesHeader}>
                    <Typography variant="h6" align="center">
                        Upcoming Movies
                    </Typography>
                </div>

                <div className={classes.imageListDiv}>


                    <ImageList className={classes.imageList} cols={4.5} rowHeight={230}>

                        {
                            moviesData.map((moviesItem) => (
                                <ImageListItem key={moviesItem.id}>

                                    <img src={moviesItem.poster_url} />

                                    <ImageListItemBar

                                        title={moviesItem.title}
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title
                                        }}
                                    />
                                </ImageListItem>
                            ))
                        }

                    </ImageList>

                </div>

            </div>
        )
    }
}

export default withStyles(style)(UpcomingMovies);