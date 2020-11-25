import React from 'react';
import EventItem from './EventItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Events = ({ events, loading }) => {
    if(loading) {
       return <Spinner />
    } else {
        return (
            <div style={eventStyle}>
                {events.map(event => (
                <EventItem key={event.id} event={event} />
                ))}
            </div>
        );
    }
}

Events.propTypes = {
    events: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const eventStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Events;
