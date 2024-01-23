import React from 'react';
import PropTypes from 'prop-types';

import "./css/menu.scss";
import MenuMobile from './MenuMobile';
import SideMenu from './SideMenu';

Menu.propTypes = {
    isMobile: PropTypes.bool
};

function Menu(props) {
    const {isMobile} = props;

    if (isMobile) {
        return (<MenuMobile/>);
    }
    return (<SideMenu/>);
}

export default Menu;