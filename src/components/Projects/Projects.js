import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import translator from '../../i18n/translator';

import getProjectsData from './ProjectsData';
import Panel from '../Panel/Panel';
import {LangContext} from '../../contexts/LangContext';

function Projects() {

    const {lang} = useContext(LangContext);

    const renderProjectsPanels = () => {
        const projects = getProjectsData();

        return projects.map((project, index) => {
            const {imgSrc, title, descriptionLabel, link} = project;

            return (<Panel key={`project-panel-${index}`}
                           title={translator(title, lang)}
                           imgSrc={imgSrc}
                           link={link}
                           description={translator(descriptionLabel, lang)}/>);
        })

    };

    return (
        <Container>
            {renderProjectsPanels()}
        </Container>
    );
}

export default Projects;