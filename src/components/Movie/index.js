import React from 'react';
import { Link } from 'react-router-dom';

import './movie.css';

const Movie = ({ id, name, pictureLink, dateOfRelease, description }) => (
    <div className='film' id={id}>
        <Link to={`/${id}`}>
            <img src={pictureLink} alt={name} />
        </Link>
        <div>
            <Link to={`/${id}`}>
                <h1>{name}</h1>
            </Link>
            <div className='date-release'>Date of release: {dateOfRelease}</div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default Movie;
