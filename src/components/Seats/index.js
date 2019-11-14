import React, { memo } from 'react';

import './seats.css';

const Seat = ({ rowId, position, isFree, onClick }) => (
    <td
        className={isFree ? 'reservation-row' : 'reserved-row'}
        key={position}
        onClick={() => onClick(rowId, position, isFree)}
    />
);

const Row = ({ id, seats, onClick }) => {
    return (
        <tr key={id}>
            {
                seats.map((seat) => (
                    <Seat
                        key={seat.position}
                        rowId={id}
                        onClick={onClick}
                        {...seat}
                    />
                ))
            }
        </tr>
    )
};

const Seats = ({ seats, onClick }) => {
    return (
        <div className='seat-selection'>

            <h1 className='title'>Ticket Reservation</h1>

            <div className='prompt'>
                <div className='reserved'>reserved: <td /></div>
                <div className='reservation'>reservation: <td /></div>
            </div>

            <table>
                <tbody>
                    {
                        seats.map((row, i) =>
                            <Row
                                key={i}
                                id={i}
                                seats={row}
                                onClick={onClick}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default memo(Seats);
