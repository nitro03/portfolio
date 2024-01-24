import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import translator from '../../i18n/translator';
import {LangContext} from '../../contexts/LangContext';

import './footer.scss';

Footer.propTypes = {
    isMobile: PropTypes.bool
};

function Footer({isMobile}) {
    const {lang} = useContext(LangContext);
    const classes = classNames({
        'mobile': isMobile
    })
    return (
        <footer key="footer-key" className={classes}>
            <span className="text-center text-white-50">{translator("copyrights", lang)}</span>
        </footer>
    );
}

export default Footer;