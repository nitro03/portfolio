import React, {useContext} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import translator from '../../i18n/translator';

import getProjectsData from './ProjectsData';
import Panel from '../Panel/Panel';
import {LangContext} from '../../contexts/LangContext';
import ContentHeader from '../Content/ContentHeader';

Projects.propTypes = {
    isMobile: PropTypes.bool
};

function Projects(props) {
    const {isMobile} = props;
    const {lang} = useContext(LangContext);

    const renderProjectsPanels = () => {
        const projects = getProjectsData();


        return projects.map((project, index) => {
            const {imgSrc, title, descriptionLabel, link} = project;

            return (<Panel key={`project-panel-${index}`}
                           title={translator(title, lang)}
                           imgSrc={imgSrc}
                           link={link}
                           description={translator(descriptionLabel, lang)}
                           isMobile={isMobile} />);
        })

    };

    return (
        <Container>
            <Row>
                <Col xs={12} position={"center"}>
                    <ContentHeader title={"projects_title_desc"} bgTitle={"projects"}/>
                </Col>
            </Row>
            {renderProjectsPanels()}
        </Container>
    );
}

export default Projects;