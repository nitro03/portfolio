import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import translator from '../../i18n/translator';
import hobbiesData from './HobbiesData';
import Panel from '../Panel/Panel';

import {LangContext} from '../../contexts/LangContext';

function FreeTime() {

    const {lang} = useContext(LangContext);
    const renderFreeTimePanels = () => {
        if (Array.isArray(hobbiesData)) {
            const panelsList = hobbiesData.map((hobby, index) => {
                const {imgSrc, descriptionLabel, title, link} = hobby;
                return <Panel key={`hobby-panel-${index}`}
                                imgSrc={imgSrc}
                              title={translator(title, lang)}
                              description={translator(descriptionLabel, lang)}
                              link={link}/>
            });
            return panelsList;
        }
        console.warn('Hobbies are empty');
        return <div>No Data</div>;
    }

    return (
        <Container>
            {renderFreeTimePanels()}
        </Container>
    );
}

export default FreeTime;