import React, {useContext} from 'react';
import classNames from 'classnames';
import {Image} from 'react-bootstrap';

import translator from '../../i18n/translator';
import {LangContext} from '../../contexts/LangContext';
import {NavContext} from '../../contexts/NavContext';
import MenuItem from './MenuItem';

import myPic from './img/kb.jpg';
import "./css/menu.scss";

SideMenu.propTypes = {};

function SideMenu() {
    const {lang, setLang} = useContext(LangContext);
    const {link, setLink} = useContext(NavContext);

    const renderAvatar = () => {
        return (<div className="avatar-container">
            <div className="avatar-shadow">
                <Image className='avatar-pic' src={myPic} alt={translator("alt__my_photo", lang)} roundedCircle/>
            </div>
        </div>);
    };

    const renderMenuItems = () => {
        return (<div className='menu-buttons'>
                <MenuItem url='/' label={translator("home", lang)} activeKey={link} setActiveKey={setLink}/>
                <MenuItem url='/career' label={translator("Career", lang)} activeKey={link}
                          setActiveKey={setLink}/>
                <MenuItem url='/projects' label={translator("Projects", lang)} activeKey={link}
                          setActiveKey={setLink}/>
                <MenuItem url='/freetime' label={translator("Free_Time", lang)} activeKey={link}
                          setActiveKey={setLink}/>
                <MenuItem url='/contact' label={translator("Contact", lang)} activeKey={link}
                          setActiveKey={setLink}/>
            </div>
        );
    }

    const renderLangChanger = () => {
        return (<div className="justify-content-start">
            <ul className="lang-change">
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
            {renderLangChanger()}
            {renderAvatar()}
            {renderMenuItems()}

        </nav>
    );
}

export default SideMenu;