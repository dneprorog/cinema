import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'

import Header from '../Header';
import Movie from '../Movie';
import Session from '../Session';

import './movie-details.css';

const MovieDetails = ({ match }) => {
    const { id: movieId } = match.params;
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(
        () => {
            axios.get(`https://cinema-api-test.herokuapp.com/movies?movie_id=${movieId}`)
                .then(({ data }) => data)
                .then(setMovieDetails)
                .catch(console.log);
        }, [movieId]
    );

    const { _id: id, pictureLink, name, dateOfRelease, description } = movieDetails;

    return (
        <>
            <Header hideInput={false}/>
            <div className='movie-details-wrapper'>
                <Movie
                    id={id}
                    pictureLink={pictureLink}
                    name={name}
                    dateOfRelease={moment(dateOfRelease).format('DD/MM/YYYY')}
                    description={description}
                />

                <Session movieId={movieId} />
            </div>
        </>
    )
};

export default MovieDetails;
