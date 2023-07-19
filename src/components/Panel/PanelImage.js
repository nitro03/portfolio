import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';


const PanelImage = (props) => {
    const {imgSrc} = props;
    const img = <Image src={imgSrc}/>;
    return (
        <div className="panel-image">
            {img}
        </div>
    );
};

PanelImage.propTypes = {
    imgSrc: PropTypes.node.isRequired
};

export default PanelImage;