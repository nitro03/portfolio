import React, {useContext} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';
import ContentHeader from '../Content/ContentHeader';
import CareerCard from './CareerCard';

import './career.scss'

function Career() {
    const {lang} = useContext(LangContext);
    return (
        <Container className="bg-light career-container">
            <Row>
                <Col xs={12} position={"center"}>
                    <ContentHeader title={"career_title_desc"} bgTitle={"career"}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period={`2023-07 - ${translator("now", lang)}`}
                        description={translator("team_leader_desc_new", lang)}
                        position={translator("team_leader", lang)}
                        employer="Comarch"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period="2021-10 - 2023-06"
                        description={translator("director_desc", lang)}
                        position={translator("director", lang)}
                        employer="Comarch"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period="2016-06 - 2021-09"
                        description={translator("team_leader_desc", lang)}
                        position={translator("team_leader", lang)}
                        employer="Comarch"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} position={"center"}>
                    <CareerCard
                        period="2013-06 - 2016-06"
                        description={translator("developer_desc", lang)}
                        position={translator("developer", lang)}
                        employer="Comarch"/>
                </Col>
            </Row>

        </Container>
    );
}

export default Career;