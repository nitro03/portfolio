import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';
import classNames from 'classnames';

const ContentHeader = (props) => {
    const {title, bgTitle, isMobile} = props;
    const {lang} = useContext(LangContext);

    const h1String = translator(bgTitle, lang)?.toUpperCase();

    const classes = classNames("content-header-background", {
        'mobile': isMobile
    });

    return (
        <div className="content-header">
            <div className={classes}>
                <h1>{h1String}</h1>
                <p>{translator(title, lang)}</p>
            </div>

        </div>
    );
}

ContentHeader.propTypes = {
    title: PropTypes.string.isRequired,
    bgTitle: PropTypes.string.isRequired,
    isMobile: PropTypes.bool
}

export default ContentHeader;