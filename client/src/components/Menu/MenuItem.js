import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    activeKey: PropTypes.string.isRequired,
    setActiveKey: PropTypes.func.isRequired,
    onClick: PropTypes.func
};

function MenuItem(props) {
    const {url, label, activeKey, setActiveKey, onClick} = props;
    const isActive = activeKey === url ? true : false;
    const click = () => {
        setActiveKey(url);
        if(typeof onClick === 'function'){
            onClick();
        }
    };

    const classes = classNames('menu-item', {'active': isActive});
    return (
        <div className={classes} onClick={click}>
            <Link to={url}>{label}</Link>
        </div>
    );
}

export default MenuItem;