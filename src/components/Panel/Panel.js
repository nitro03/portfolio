import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import PanelImage from './PanelImage';

import './scss/Panel.scss';
import classNames from 'classnames';
import LinkBtn from "../LinkBtn/LinkBtn";

const Panel = (props) => {
    const {imgSrc, title, description, alt, link, isMobile} = props;

    const renderLink = () => {
        if (link) {
            return (<LinkBtn link={link}/>)
        }
    };
    const panelClasses = classNames("panel", {
        'mobile': isMobile
    });
    const descriptionClasses = classNames("content-panel-description", {
        'mobile': isMobile
    });

    return (

        <Row>
            <Col lg={12} position="center">
                <div className={panelClasses}>
                    <PanelImage isMobile={isMobile} imgSrc={imgSrc} alt={alt} />
                    <div className={descriptionClasses}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {renderLink()}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

Panel.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    isMobile: PropTypes.bool
};

export default Panel;