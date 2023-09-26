import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {LangContext} from '../../contexts/LangContext';
import translator from '../../i18n/translator';

import './navButton.scss';

const NavButton = (props) => {
    const {to, label, onClick} = props;

    const {lang} = useContext(LangContext);
    const onClickFunc = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button className="btn-main" onClick={onClickFunc}>
            <Link to={to}>{translator(label, lang)}</Link>
        </button>
    );
};

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func
}
export default NavButton;