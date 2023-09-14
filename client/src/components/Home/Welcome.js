import React, {useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import translator from '../../i18n/translator';
import {LangContext} from '../../contexts/LangContext';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';

import './welcome.scss';

function Welcome() {
    const {lang} = useContext(LangContext);
    const typewriterOptions = {
        strings: [
            translator("welcome_name_msg", lang),
            translator("welcome_profession1_msg", lang),
            translator("welcome_profession2_msg", lang),
            translator("welcome_profession3_msg", lang)
        ],
        autoStart: true,
        loop: true,
        cursor: "_"
    };

    return (
        <div className="welcome-container">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <div className="welcome-typewriter-container">
                            <span className="welcome-typewriter-line-1">{translator("welcome_hello_msg", lang)}</span>
                            <Typewriter options={typewriterOptions}/>
                            <span className="welcome-typewriter-line-3">{translator("welcome_location_msg", lang)}</span>
                            <button className="welcome-contact-btn">
                                <Link to="/contact">{translator("welcome_btn_msg", lang)}</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Welcome;