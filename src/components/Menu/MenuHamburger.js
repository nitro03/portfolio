import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './css/menuHamburger.scss';

MenuHamburger.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    callback: PropTypes.func
}

function MenuHamburger({callback, isExpanded}) {
    const onClick = () => {
        callback(!isExpanded);
    };

    const classes = classNames("hamburger", {
        'is-active': isExpanded
    })
    return (
        <div className={classes} onClick={onClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    );
}

export default MenuHamburger;