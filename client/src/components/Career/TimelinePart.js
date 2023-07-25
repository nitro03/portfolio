import React from 'react';
import PropTypes from 'prop-types';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import {Typography} from '@mui/material';
import ca_logo from './img/comarch_logo.svg';
import {Image} from 'react-bootstrap';

TimelinePart.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

function TimelinePart(props) {
    const {date, title, text} = props;

    return (
        <TimelineItem className="text-white-50">
            <TimelineOppositeContent>
                <div className="timeline-datewrapper">
                    <div>{date}</div>
                    <Image src={ca_logo} height="15px"/>
                </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span">
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}

export default TimelinePart;