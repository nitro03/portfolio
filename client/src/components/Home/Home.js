import React, {useContext} from 'react';
import {Col, Container, Row, Card} from 'react-bootstrap';
import translator from '../../i18n/translator';
import {LangContext} from '../../contexts/LangContext';

import './home.scss';

function Home() {
    const {lang} = useContext(LangContext);
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Card className="bg-white bg-opacity-50">
                        <Card.Body>
                            <Card.Title className="fs-1">{translator("hello", lang)}</Card.Title>
                            <Card.Text className="fs-3">
                                {translator("hello_msg", lang)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;