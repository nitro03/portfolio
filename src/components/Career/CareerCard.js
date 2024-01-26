import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./careerCard.scss";

CareerCard.propTypes = {
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    isMobile: PropTypes.bool
};

function CareerCard(props) {
    const {employer, period, description, position, isMobile} = props;
    const classes = classNames('career-card', {
        'mobile': isMobile
    })
    return (
        <div className={classes}>
            <div className="career-card-period">{period}</div>
            <h3 className="career-card-position">{position}</h3>
            <h2 className="career-card-employer">{employer}</h2>
            <p className="career-card-description">{description}</p>
        </div>
    );
}

export default CareerCard;