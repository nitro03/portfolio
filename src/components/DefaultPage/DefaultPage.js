import React from 'react';
import {Image} from 'react-bootstrap';

import defaultPageImg from './img/404_page.png'
import './scss/defaultPage.scss';
import classNames from "classnames";

const DefaultPage = ({isMobile}) => {
    const classes = classNames("defaultPage_container", {
        'mobile': isMobile
    })

    return (
        <div className={classes}>
            <div className="defaultPage_img">
                <Image src={defaultPageImg}/>
            </div>
        </div>

    );
};

export default DefaultPage;