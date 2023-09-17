import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';


const ContentHeader = (props) => {
    const {title, bgTitle} = props;
    const {lang} = useContext(LangContext);

    const h1String = translator(bgTitle, lang)?.toUpperCase();

    return (
        <div className="content-header">
            <div className="content-header-background">
                <h1>{h1String}</h1>
                <p>{translator(title, lang)}</p>
            </div>

        </div>
    );
}

ContentHeader.propTypes = {
    title: PropTypes.string.isRequired,
    bgTitle: PropTypes.string.isRequired
}

export default ContentHeader;