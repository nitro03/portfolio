import React, {useContext, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import translator from '../../i18n/translator';
import hobbiesData from './HobbiesData';

import {LangContext} from '../../contexts/LangContext';
import ContentHeader from '../Content/ContentHeader';
import PropTypes from 'prop-types';
import Tile from "./Tile/Tile";

FreeTime.propTypes = {
    isMobile: PropTypes.bool
};

function FreeTime(props) {

    const [expandedId, setExpandedId] = useState(null);
    const {lang} = useContext(LangContext);
    const {isMobile} = props;

    const handleClick = (id) => {
        if (id === expandedId) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };
    const renderTile = (index) => {
        if (Array.isArray(hobbiesData)) {
            const {imgSrc, descriptionLabel, title, link, alt} = hobbiesData[index];
            const id = `hobby-panel-${index}`
            const isExpanded = id === expandedId;
            return <Tile key={id}
                         id={id}
                         imgSrc={imgSrc}
                         title={translator(title, lang)}
                         description={translator(descriptionLabel, lang)}
                         link={link}
                         onClick={handleClick}
                         isExpanded={isExpanded}
                         isMobile={isMobile}
                         alt={translator(alt, lang)}/>
        }
        console.warn('Hobbies are empty');
        return <div>No Data</div>;
    }

    return (
        <Container>
            <Row>
                <Col xs={12} position={"center"}>
                    <ContentHeader title={"free_time"} isMobile={isMobile} bgTitle={"free_time_title_desc"}/>
                </Col>
            </Row>
            <Row>
                <Col lg={7}>
                    {renderTile(0)}
                    {renderTile(1)}
                </Col>
                <Col lg={5}>
                    {renderTile(2)}
                    {renderTile(3)}
                    {renderTile(4)}
                </Col>
            </Row>
        </Container>
    );
}

export default FreeTime;