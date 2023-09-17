import React, {useContext} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {Timeline} from '@mui/lab';
import TimelinePart from './TimelinePart';
import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';
import ContentHeader from '../Content/ContentHeader';

function Career() {
    const {lang} = useContext(LangContext);
    return (
        <Container className="bg-light">
            <Row>
                <Col xs={12} position={"center"}>
                    <ContentHeader title={"career_title_desc"} bgTitle={"career"} />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Timeline position="center">
                        <TimelinePart date={"2023-07 - now"} title={translator("team_leader", lang)}
                                      text={translator("team_leader_desc_new", lang)}/>
                        <TimelinePart date={"2021-10 - 2023-06"} title={translator("director", lang)}
                                      text={translator("director_desc", lang)}/>
                        <TimelinePart date={"2016-06 - 2021-09"} title={translator("team_leader", lang)}
                                      text={translator("team_leader_desc", lang)}/>
                        <TimelinePart date={"2013-06 - 2016-06"} title={translator("developer", lang)}
                                      text={translator("developer_desc", lang)}/>
                    </Timeline>
                </Col>
            </Row>
        </Container>
);
}

export default Career;