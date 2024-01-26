import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import classNames from 'classnames';

import './scss/tile.scss';

const TileImage = (props) => {
    const {imgSrc, isMobile, isExpanded} = props;
    const img = <Image src={imgSrc}/>;
    const classes = classNames("tile-image", {
        'mobile': isMobile,
        'isExpanded': isExpanded
    });

    return (
        <div className={classes}>
            {img}
        </div>
    );
};

TileImage.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    isMobile: PropTypes.bool
};

export default TileImage;