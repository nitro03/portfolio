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
            const panelsList = hobbiesData.map((hobby) => {
                const {imgSrc, descriptionLabel, title} = hobby;
                return <Panel imgSrc={imgSrc}
                              title={translator(title, lang)}
                              description={translator(descriptionLabel, lang)}/>
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