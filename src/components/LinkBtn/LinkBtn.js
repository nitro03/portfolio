import React from 'react';
import {Button} from "react-bootstrap";

function LinkBtn(props) {
    const {link} = props;
    return (
        <div className="tile_link">
            <a href={link} target="_blank">
                <Button className="btn-main">
                    <span className="contact-form__submit-btn__span">{"Link"}</span>
                </Button>
            </a>
        </div>
    );
}

export default LinkBtn;