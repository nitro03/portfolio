import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Row} from 'react-bootstrap';
import PanelImage from './PanelImage';

import './scss/Panel.scss';

const Panel = (props) => {
    const {imgSrc, title, description, link} = props;

    const renderLink = () => {
        if (link) {
            return (<Button variant="link" href={link} className="link">Link</Button>)
        }
    };
    return (

        <Row className="panel m-3 p-3">
            <Col xs={4}>
                <PanelImage imgSrc={imgSrc}></PanelImage>
            </Col>
            <Col xs={8}>
                <div className="content-panel-description p-3 ">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {renderLink()}
                </div>
            </Col>
        </Row>
    );
};

Panel.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string
};

export default Panel;