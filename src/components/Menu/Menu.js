import React, {useContext} from 'react';
import classNames from 'classnames';
import translator from '../../i18n/translator';

import "./menu.scss";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LangContext} from '../../contexts/LangContext';

Menu.propTypes = {};

function Menu() {
    const activeKey = window?.location?.pathname;
    const {lang, setLang} = useContext(LangContext);
    console.log(lang);
    const changeLang = (lang) => {
        setLang(lang);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={activeKey}>
                        <Nav.Link href="/">{translator( "home", lang)}</Nav.Link>
                        <Nav.Link href="/career">{translator( "Career", lang)}</Nav.Link>
                        <Nav.Link href="/projects">{translator( "Projects", lang)}</Nav.Link>
                        <Nav.Link href="/freetime">{translator( "Free_Time", lang)}</Nav.Link>
                        <Nav.Link href="/contact">{translator( "Contact", lang)}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="justify-content-end ">
                    <ul className="lang-change text-white-50">
                        <li className={classNames("btn", {active: lang === "en"})} onClick={()=>{changeLang("en")}}>EN</li>
                        <li>|</li>
                        <li className={classNames("btn",{active: lang === "pl"})} onClick={()=>{changeLang("pl")}}>PL</li>
                    </ul>
                </div>
            </Container>
        </Navbar>
    );
}

export default Menu;