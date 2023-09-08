import React, {useContext, useEffect, useState} from 'react';
import classNames from 'classnames';
import translator from '../../i18n/translator';

import "./menu.scss";
import {Image} from 'react-bootstrap';
import {LangContext} from '../../contexts/LangContext';
import myPic from './img/kb.jpg';
import MenuItem from './MenuItem';

Menu.propTypes = {};

function Menu() {
    const {lang, setLang} = useContext(LangContext);
    const [activeKey, setActiveKey] = useState(window?.location?.pathname)


    const renderAvatar = () => {
        return (<div className="avatar-container">
            <div className="avatar-shadow">
                <Image className='avatar-pic' src={myPic} roundedCircle/>
            </div>
        </div>);
    };
    const renderMenuItems = () => {
        return (<div className='menu-buttons'>
                <MenuItem url='/' label={translator("home", lang)} activeKey={activeKey} setActiveKey={setActiveKey}/>
                <MenuItem url='/career' label={translator("Career", lang)} activeKey={activeKey}
                          setActiveKey={setActiveKey}/>
                <MenuItem url='/projects' label={translator("Projects", lang)} activeKey={activeKey}
                          setActiveKey={setActiveKey}/>
                <MenuItem url='/freetime' label={translator("Free_Time", lang)} activeKey={activeKey}
                          setActiveKey={setActiveKey}/>
                <MenuItem url='/contact' label={translator("Contact", lang)} activeKey={activeKey}
                          setActiveKey={setActiveKey}/>
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

export default Menu;