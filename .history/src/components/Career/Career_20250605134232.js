import React, {useContext} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';
import ContentHeader from '../Content/ContentHeader';
import CareerCard from './CareerCard';

import './career.scss'
import PropTypes from 'prop-types';

Career.propTypes = {
    isMobile: PropTypes.bool
};

function Career(props) {
    const {lang} = useContext(LangContext);
    const {isMobile} = props;

    return (
        <Container className="bg-light career-container">
            <Row>
                <Col xs={12} position={"center"}>
                    <ContentHeader title={"career_title_desc"} isMobile={isMobile} bgTitle={"career"}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period={`2025-05 - ${translator("now", lang)}`}
                        description={translator("epam_desc", lang)}
                        position={translator("lead_engineer", lang)}
                        employer="EPAM Systems"
                        isMobile={isMobile}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period={`2023-07 - 2025-04}`}
                        description={translator("team_leader_desc_new", lang)}
                        position={translator("team_leader", lang)}
                        employer="Comarch"
                        isMobile={isMobile}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period="2021-10 - 2023-06"
                        description={translator("director_desc", lang)}
                        position={translator("director", lang)}
                        employer="Comarch"
                        isMobile={isMobile}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period="2016-06 - 2021-09"
                        description={translator("team_leader_desc", lang)}
                        position={translator("team_leader", lang)}
                        employer="Comarch"
                        isMobile={isMobile}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period="2013-06 - 2016-06"
                        description={translator("developer_desc", lang)}
                        position={translator("developer", lang)}
                        employer="Comarch"
                        isMobile={isMobile}/>
                </Col>
            </Row>

        </Container>
    );
}

export default Career;