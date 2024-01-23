import React, {useContext} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import translator from '../../i18n/translator';
import hobbiesData from './HobbiesData';
import Panel from '../Panel/Panel';

import {LangContext} from '../../contexts/LangContext';
import ContentHeader from '../Content/ContentHeader';
import PropTypes from 'prop-types';

FreeTime.propTypes = {
    isMobile: PropTypes.bool
};

function FreeTime(props) {

    const {lang} = useContext(LangContext);
    const {isMobile} = props;
    const renderFreeTimePanels = () => {
        if (Array.isArray(hobbiesData)) {
            return hobbiesData.map((hobby, index) => {
                const {imgSrc, descriptionLabel, title, link} = hobby;
                return <Panel key={`hobby-panel-${index}`}
                              imgSrc={imgSrc}
                              title={translator(title, lang)}
                              description={translator(descriptionLabel, lang)}
                              link={link}
                              isMobile={isMobile}/>
            });
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
            {renderFreeTimePanels()}
        </Container>
    );
}

export default FreeTime;