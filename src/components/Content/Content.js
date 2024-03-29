import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Welcome from '../Home/Welcome';
import Career from '../Career/Career';
import Projects from '../Projects/Projects';
import FreeTime from '../FreeTime/FreeTime';
import Contact from '../Contact/Contact';


import "./content.scss"
import DefaultPage from "../DefaultPage/DefaultPage";

Content.propTypes = {
    isMobile: PropTypes.bool
}

function Content({isMobile}) {

    const classes = classNames("content", {
        'mobile': isMobile
    })
    return (
        <main className={classes}>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/career" element={<Career isMobile={isMobile}/>}/>
                <Route path="/projects" element={<Projects isMobile={isMobile}/>}/>
                <Route path="/freetime" element={<FreeTime isMobile={isMobile}/>}/>
                <Route path="/contact" element={<Contact isMobile={isMobile}/>}/>
                <Route path="*" element={<DefaultPage isMobile={isMobile}/>}/>
            </Routes>
        </main>
    );
}

export default Content;