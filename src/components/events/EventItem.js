import React from 'react'
import PropTypes from 'prop-types';

 const EventItem = ({ event: { name } }) => {
    
    return (
        <div className="card text-center">
            <h3>{name}</h3>
        </div>
    )
}

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
}

export default EventItem;
