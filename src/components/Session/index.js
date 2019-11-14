import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import moment from 'moment';

import Seats from '../Seats';

const Session = ({ movieId }) => {
    const [session, setSession] = useState({});
    useEffect(() => {
        axios.get(`https://cinema-api-test.herokuapp.com/movieShows?movie_id=${movieId}`)
            .then(({ data }) => data)
            .then(setSession)
            .catch(console.log)
    }, [movieId]);

    const onSeatClicked = (rowId, position, isFree) => {
        console.log(rowId, position, isFree);
        axios.post('https://cinema-api-test.herokuapp.com/bookingPlace', {
            movieShow_id: movieId,
            row_id: rowId,
            place_position: position,
            isFree
        }).then(({ data }) => data)
        .then(msg => alert(`${msg} - это ответ от сервера...`))
        .catch(console.log)
    };

    console.log(session);

    return (
        <>
            {
                session._id &&
                    (
                        <>
                            <p>Session start: { moment(session.startTime).format('DD/MM/YYYY HH:mm') }</p>
                            <p>Price: { session.ticketPrice }</p>

                            <Seats
                                seats={session.places}
                                onClick={onSeatClicked}
                            />
                        </>
                    )
            }
        </>
    );
};

export default memo(Session);
