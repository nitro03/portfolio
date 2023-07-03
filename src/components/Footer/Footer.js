import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import translator from '../../i18n/translator';

import './footer.scss';
import {LangContext} from '../../contexts/LangContext';

Footer.propTypes = {};

function Footer() {
    const {lang} = useContext(LangContext);
    return (
        <footer className="footer py-5 bg-dark">
            <Container className="px-4">
                <p className="text-center text-white-50">{translator("copyrights", lang)}</p>
            </Container>
        </footer>
    );
}

export default Footer;