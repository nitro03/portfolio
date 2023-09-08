import React, {useContext} from 'react';
import classNames from 'classnames';
import translator from '../../i18n/translator';

import "./menu.scss";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LangContext} from '../../contexts/LangContext';
import {Link} from 'react-router-dom';

MenuMobile.propTypes = {};

function MenuMobile() {
    const activeKey = window?.location?.pathname;
    const {lang, setLang} = useContext(LangContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={activeKey}>
                        <Nav.Link><Link to='/'>{translator( "home", lang)}</Link></Nav.Link>
                        <Nav.Link><Link to='/career'>{translator( "Career", lang)}</Link></Nav.Link>
                        <Nav.Link><Link to='/projects'>{translator( "Projects", lang)}</Link></Nav.Link>
                        <Nav.Link><Link to='/freetime'>{translator( "Free_Time", lang)}</Link></Nav.Link>
                        <Nav.Link><Link to='/contact'>{translator( "Contact", lang)}</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="justify-content-end ">
                    <ul className="lang-change text-white-50">
                        <li className={classNames("btn", {active: lang === "en"})} onClick={()=>{setLang("en")}}>EN</li>
                        <li>|</li>
                        <li className={classNames("btn",{active: lang === "pl"})} onClick={()=>{setLang("pl")}}>PL</li>
                    </ul>
                </div>
            </Container>
        </Navbar>
    );
}

export default MenuMobile;