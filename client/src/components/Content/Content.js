import React from 'react';

import "./content.scss"
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Career from '../Career/Career';
import Projects from '../Projects/Projects';
import FreeTime from '../FreeTime/FreeTime';
import Contact from '../Contact/Contact';
import {Col, Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

Content.propTypes = {
    isMobile: PropTypes.bool
}

function Content({isMobile}) {

    const classes = classNames("content content bg-dark bg-opacity-75 py-5 px-5", {
        'mobile': isMobile
    })
    return (
        <main className={classes}>
            <Container fluid className={"p-0"}>
                <Row>
                    <Col lg={12}>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/career" element={<Career/>} />
                            <Route path="/projects" element={<Projects/>} />
                            <Route path="/freetime" element={<FreeTime/>} />
                            <Route path="/contact" element={<Contact/>} />
                        </Routes>
                    </Col>
                </Row>
            </Container>

        </main>
    );
}

export default Content;