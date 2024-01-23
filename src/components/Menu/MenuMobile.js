import React, {useContext, useState} from 'react';
import classNames from 'classnames';

import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';
import MenuHamburger from './MenuHamburger';
import MenuItem from './MenuItem';

import "./css/menu.scss";
import {NavContext} from '../../contexts/NavContext';

MenuMobile.propTypes = {};

function MenuMobile() {
    const {lang, setLang} = useContext(LangContext);
    const {link, setLink} = useContext(NavContext);

    const [isExpanded, setIsExpanded] = useState(false);

    const renderButton = () => {
        return (
            <MenuHamburger isExpanded={isExpanded} callback={setIsExpanded}/>
        );
    };
    const renderMenuItems = () => {
        const classes = classNames("menu-buttons mobile", {'closed': !isExpanded})
        const onClick = () => {
            setIsExpanded(false);
        }
        return (<div className={classes}>
                <MenuItem url='/' label={translator("home", lang)} activeKey={link} setActiveKey={setLink} onClick={onClick}/>
                <MenuItem url='/career' label={translator("Career", lang)} activeKey={link}
                          setActiveKey={setLink} onClick={onClick}/>
                <MenuItem url='/projects' label={translator("Projects", lang)} activeKey={link}
                          setActiveKey={setLink} onClick={onClick}/>
                <MenuItem url='/freetime' label={translator("Free_Time", lang)} activeKey={link}
                          setActiveKey={setLink} onClick={onClick}/>
                <MenuItem url='/contact' label={translator("Contact", lang)} activeKey={link}
                          setActiveKey={setLink} onClick={onClick}/>
            </div>
        );
    }

    return (
        <nav data-bs-theme="dark">
            <div className="navigation-buttons-container">
                {renderButton()}
                <ul className="lang-change">
                    <li className={classNames("btn", {active: lang === "en"})} onClick={() => {
                        setLang("en")
                    }}>EN
                    </li>
                    <li className={classNames("btn", {active: lang === "pl"})} onClick={() => {
                        setLang("pl")
                    }}>PL
                    </li>
                </ul>
            </div>
            {renderMenuItems()}

        </nav>
    );
}

export default MenuMobile;