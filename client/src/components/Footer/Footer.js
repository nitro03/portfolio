import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import translator from '../../i18n/translator';

import './footer.scss';
import {LangContext} from '../../contexts/LangContext';

Footer.propTypes = {};

function Footer() {
    const {lang} = useContext(LangContext);
    return (
        <footer key="footer-key" className="bg-dark">
            <span className="text-center text-white-50">{translator("copyrights", lang)}</span>
        </footer>
    );
}

export default Footer;