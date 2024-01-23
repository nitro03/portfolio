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
            <span className="career-card-position">{position}</span>
            <span className="career-card-employer">{employer}</span>
            <div className="career-card-description">{description}</div>
        </div>
    );
}

export default CareerCard;