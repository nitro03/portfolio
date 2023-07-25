import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

MenuItem.propTypes = {

};

function MenuItem(props) {

    return (
        <Button href={props.url}>
            {props.label}
        </Button>
    );
}

export default MenuItem;