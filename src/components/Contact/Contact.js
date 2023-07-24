import React, {useContext, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import translator from '../../i18n/translator';
import {LangContext} from '../../contexts/LangContext';
import EmailIcon from '@mui/icons-material/Email';

import './contact.scss';

function Contact() {
    const MSG_FIELD_ROWS = 10;
    const INPUT_EMAIL_ID = 'formControlEmail';
    const INPUT_NAME_ID = 'formControlName';
    const INPUT_MSG_ID = 'formControlMsg';
    const {lang} = useContext(LangContext);

    const [formState, setFormState] = useState({
        senderMail: '',
        senderName: '',
        msg: ''
    });

    const validateForm = () => {
        //TODO
    };

    const showConfirmation = function () {
        //TODO: zrobić toast
        alert(translator('contact_confirmation', lang));
    };

    const clearInputs = () => {
        //TODO
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString();

        const {senderMail, senderName, msg} = formState;

        const message = {
            senderMail,
            senderName,
            msg,
            date: currentDate
        }
        //tu powinna byc akcja wyslania wiadomosci na maila
        console.log(message);
    }
    const renderInfo = () => {
        return (
            <p className="contact-info">
                {translator('contact_info', lang)}
            </p>);
    }

    const onInputChange = (e) => {
        const currState = {...formState};
        const input = e.target;
        const inputId = input?.id;
        const value = input?.value;
        if (inputId) {
            switch (inputId) {
                case INPUT_EMAIL_ID:
                    setFormState({
                        ...currState,
                        senderMail: value
                    })
                    break;
                case INPUT_NAME_ID:
                    setFormState({
                        ...currState,
                        senderName: value
                    })
                    break;
                case INPUT_MSG_ID:
                    setFormState({
                        ...currState,
                        msg: value
                    })
                    break;
            }
            return;
        }
        console.error('Input Id is empty, state was\'nt set');
        return;
    }
    const renderForm = () => {
        return (
            <Form className="contact-form">
                <Form.Group className="mb-3" controlId={INPUT_EMAIL_ID}>
                    <Form.Label>{translator('email_label', lang)}</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId={INPUT_NAME_ID}>
                    <Form.Label>{translator('name_label', lang)}</Form.Label>
                    <Form.Control onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId={INPUT_MSG_ID}>
                    <Form.Label>{translator('message_label', lang)}</Form.Label>
                    <Form.Control as="textarea" rows={MSG_FIELD_ROWS} onChange={onInputChange}/>
                </Form.Group>
                <Button className="contact-form__submit-btn" variant="primary" type="submit" size="lg"
                        onClick={onSubmit}>
                    <EmailIcon/>
                    <span className="contact-form__submit-btn__span">{translator('submit_btn_label', lang)}</span>
                </Button>
            </Form>
        )
    };
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg="6">
                    {renderInfo()}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg="6">
                    {renderForm()}
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;