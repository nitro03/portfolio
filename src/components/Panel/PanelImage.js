import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import classNames from 'classnames';

const PanelImage = (props) => {
    const {imgSrc, isMobile, alt} = props;
    const img = <Image src={imgSrc} alt={alt}/>;
    const classes = classNames("panel-image", {
        'mobile': isMobile
    });

    return (
        <div className={classes}>
            {img}
        </div>
    );
};

PanelImage.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    isMobile: PropTypes.bool
};

export default PanelImage;