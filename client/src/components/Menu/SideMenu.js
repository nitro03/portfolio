import React, {useContext} from 'react';
import classNames from 'classnames';
import translator from '../../i18n/translator';

import "./menu.scss";
import {Container, Image, Nav, Navbar} from 'react-bootstrap';
import {LangContext} from '../../contexts/LangContext';
import {Link} from 'react-router-dom';
import myPic from './img/kb.jpg';

Menu.propTypes = {};

function Menu() {
    const activeKey = window?.location?.pathname;
    const {lang, setLang} = useContext(LangContext);


    const renderAvatar = () => {
        return (<div>
            <Image className='avatar-pic' src={myPic} roundedCircle/>
        </div>);
    };
    const renderMenuItems = () => {
        return (<div>
                <Nav.Link><Link to='/'>{translator("home", lang)}</Link></Nav.Link>
                <Nav.Link><Link to='/career'>{translator("Career", lang)}</Link></Nav.Link>
                <Nav.Link><Link to='/projects'>{translator("Projects", lang)}</Link></Nav.Link>
                <Nav.Link><Link to='/freetime'>{translator("Free_Time", lang)}</Link></Nav.Link>
                <Nav.Link><Link to='/contact'>{translator("Contact", lang)}</Link></Nav.Link>
            </div>
        );
    }

    const renderLangChanger = () => {
        return (<div className="justify-content-end ">
            <ul className="lang-change text-white-50">
                <li className={classNames("btn", {active: lang === "en"})} onClick={() => {
                    setLang("en")
                }}>EN
                </li>
                <li>|</li>
                <li className={classNames("btn", {active: lang === "pl"})} onClick={() => {
                    setLang("pl")
                }}>PL
                </li>
            </ul>
        </div>);
    }

    return (
        <nav className="menu-sideMenu">
            {renderAvatar()}
            {renderMenuItems()}
            {renderLangChanger()}
        </nav>
    );
}

export default Menu;