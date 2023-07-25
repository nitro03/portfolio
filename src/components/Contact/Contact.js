import React, {useContext, useState} from 'react';
import {Button, Col, Container, Form, Row, Modal} from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import translator from '../../i18n/translator';
import {LangContext} from '../../contexts/LangContext';
import call from './call';

import './contact.scss';

function Contact() {
    const MSG_FIELD_ROWS = 10;
    const INPUT_EMAIL_ID = 'formControlEmail';
    const INPUT_NAME_ID = 'formControlName';
    const INPUT_MSG_ID = 'formControlMsg';
    const INITIAL_STATE = {
        senderMail: '',
        senderName: '',
        msg: ''
    };

    const {lang} = useContext(LangContext);

    const [formState, setFormState] = useState(INITIAL_STATE);
    const [validated, setValidated] = useState(false);
    const [isModalShown, showModal] = useState(false);
    const [hasRequestPassed, setRequestPassed] = useState(false);
    const toggleModal = () => showModal(!isModalShown);
    const openConfirmation = () => {
        setRequestPassed(true);
        toggleModal();
    }
    const openErrorInfo = () => {
        setRequestPassed(false);
        toggleModal();
    }

    const clearInputs = () => {
        setFormState(INITIAL_STATE);
        setValidated(false);
    }

    const sendMsg = (message) => {
        const url = '/rest/send-mail'
        const options = {
            url,
            method: 'POST',
            body: {
                ...message
            }
        }
        call(options, onSuccess, onFail);
    }
    const onSuccess = () => {
        openConfirmation();
        clearInputs();
    }
    const onFail = () => {
        openErrorInfo();
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        const currentDate = new Date().toISOString();

        const {senderMail, senderName, msg} = formState;
        const message = {
            senderMail,
            senderName,
            msg,
            date: currentDate
        }
        sendMsg(message)
    }
    const renderInfo = () => {
        return (
            <p className="contact-info">
                {translator('contact_info', lang)}
            </p>
        );
    };

    const renderModal = () => {
        const variant = hasRequestPassed ? 'primary' : 'danger';
        const title = hasRequestPassed ? 'message_sent' : 'message_not_sent';
        const msg = hasRequestPassed ? 'contact_confirmation' : 'contact_error_msg';

        return (
            <Modal show={isModalShown} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{translator(title, lang)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{translator(msg, lang)}</Modal.Body>
                <Modal.Footer>

                    <Button variant={variant} onClick={toggleModal}>
                        {translator('close', lang)}
                    </Button>
                </Modal.Footer>
            </Modal>
        );

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
                default:
            }
            setValidated(true);
            return;
        }
        console.error('Input Id is empty, state was\'nt set');
    }
    const renderForm = () => {
        const {senderMail, senderName, msg} = formState
        return (
            <Form noValidate validated={validated} onSubmit={onSubmit} className="contact-form">
                <Form.Group className="mb-3" controlId={INPUT_EMAIL_ID}>
                    <Form.Label>{translator('email_label', lang)}</Form.Label>
                    <Form.Control type="email" required={true} placeholder="name@example.com" value={senderMail}
                                  onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId={INPUT_NAME_ID}>
                    <Form.Label>{translator('name_label', lang)}</Form.Label>
                    <Form.Control value={senderName} required onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId={INPUT_MSG_ID}>
                    <Form.Label>{translator('message_label', lang)}</Form.Label>
                    <Form.Control as="textarea" required rows={MSG_FIELD_ROWS} value={msg} onChange={onInputChange}/>
                </Form.Group>
                <Button className="contact-form__submit-btn" variant="primary" type="submit" size="lg">
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
                    {renderModal()}
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