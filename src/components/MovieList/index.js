import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'

import Movie from '../Movie';
import Header from '../Header';

import './movie-list.css';

function MoviesList() {
    const [movies, setMovies] = useState([]);
    useEffect(
        () => {
            axios.get('https://cinema-api-test.herokuapp.com/movies')
                .then(({ data }) => data)
                .then(setMovies)
                .catch(console.log);
        }, []
    );

    const onSearchChanged = (term) => {
        const searchUrl = (
            term
                ? `https://cinema-api-test.herokuapp.com/movies/find?name=${term}`
                :'https://cinema-api-test.herokuapp.com/movies'
        );

        axios.get(searchUrl)
            .then(({ data }) => data)
            .then(setMovies)
            .catch(console.log);
    };

    return (
        <>
            <Header onChange={onSearchChanged} hideInput={true} />
            <div className='wrapper'>
                {
                    movies.map(movie => {
                        const { _id: id, pictureLink, name, dateOfRelease } = movie;
                            return (
                                <Movie
                                    key={id}
                                    id={id}
                                    name={name}
                                    pictureLink={pictureLink}
                                    dateOfRelease={moment(dateOfRelease).format('DD/MM/YYYY')}
                                />
                            )
                        }
                    )
                }
            </div>
        </>
    )
}

export default MoviesList;
